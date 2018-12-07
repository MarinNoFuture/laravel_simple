<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\AdminUser;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Dingo\Api\Exception\ValidationHttpException;

class AuthController extends Controller
{

    //for $this->clearLoginAttempts($request);
    use AuthenticatesUsers;

    private $userData = [];

    /**
     * @param Request $request
     * @return mixed|void
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'password' => 'required|between:5,32',
        ]);

        if ($validator->fails()) {
            throw new ValidationHttpException($validator->errors());
        }

        $user = AdminUser::where('name', $request->get('name'))->orWhere('email', $request->get('name'))->first();
        if ($user) {
            if (Hash::check($request->get('password'), $user->password)) {
                $token = JWTAuth::fromUser($user);
                $this->userData = $this->preUser($user);
                return $this->sendLoginResponse($request, $token);
            }
        }

        $this->sendFailedLoginResponse();
        return null;
    }

    /**
     * @param Request $request
     * @param $token
     * @return mixed
     */
    public function sendLoginResponse(Request $request, $token)
    {
        $this->clearLoginAttempts($request);

        return $this->authenticated($token);
    }

    /**
     * @param $token
     */
    public function authenticated($token)
    {
        $data = [
            'token' => $token,
            'status_code' => 200,
            'message' => 'User Authenticated',
            'user_data' => $this->userData
        ];
        return $this->response->array($data);
    }

    /**
     * Failed login response
     */
    public function sendFailedLoginResponse()
    {
        throw new UnauthorizedHttpException("Bad Credentials");
    }

    /**
     * Logout
     */
    public function logout()
    {
        $this->guard()->logout();
    }

    /**
     * @param $user
     * @return mixed
     */
    public function preUser($user)
    {
        //@todo
        return $user;
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function register(Request $request)
    {
        $validator = $this->validator($request->all());
        if ($validator->fails()) {
            throw new ValidationHttpException($validator->errors());
        }

        $user = $this->create($request->all());
        if ($user->save()) {
            $token = JWTAuth::fromUser($user);
            $user->setAttribute('is_new', true);
            $this->userData = $this->preUser($user);
            return $this->authenticated($token);
        } else {
            $this->response->error("User Not Found...", 404);
            return null;
        }
    }

    /**
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|unique:admin_users',
            'mobile' => 'required|unique:admin_users',
            'email' => 'required|email|max:255|unique:admin_users',
            'password' => 'required|min:6',
        ]);
    }

    /**
     * @param array $data
     * @return mixed
     */
    protected function create(array $data)
    {
        return AdminUser::create([
            'name' => $data['name'],
            'mobile' => $data['mobile'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }
}