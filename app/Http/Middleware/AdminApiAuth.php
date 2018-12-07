<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class AdminApiAuth
{
    /**
     * @param $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!Auth::guard("admin_api")->check()){
            throw new UnauthorizedHttpException('jwt-auth', 'Auth failed');
        }

        return $next($request);
    }
}
