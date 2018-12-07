<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Dingo\Api\Exception\ValidationHttpException;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Illuminate\Support\Facades\Validator;
use JWTAuth;

class AuthController extends Controller
{

    use AuthenticatesUsers;

    private $openId = null;
    private $userData = [];

    public function login(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'password' => 'required|between:5,32',
        ]);

        if ($validator->fails()) {
            throw new ValidationHttpException($validator->errors());
        }

        $user = User::where('name', $request->get('name'))->orWhere('email', $request->get('name'))->first();
        if ($user) {
            if (Hash::check($request->get('password'), $user->password)) {
                $token = JWTAuth::fromUser($user);
                $this->userData = $this->preUser($user);
                return $this->sendLoginResponse($request, $token);
            }
        }

        $this->sendFailedLoginResponse();

    }

    /**
     * @param $user
     * @return mixed
     */
    public function preUser($user)
    {
        // todo
        return $user;
    }

    /**
     * @param $token
     * @return mixed
     */
    public function authenticated($token)
    {
        $data = [
            'token' => $token,
            'status_code' => 200,
            'message' => 'User Authenticated'
        ];
        if ($this->openId) {
            $data['openid'] = $this->openId;
        }
        if ($this->userData) {
            $data['user'] = $this->userData;
        }
        return $this->response->array($data);
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
     * Failed login response
     */
    public function sendFailedLoginResponse()
    {
        throw new UnauthorizedHttpException("Bad Credentials");
    }
}
