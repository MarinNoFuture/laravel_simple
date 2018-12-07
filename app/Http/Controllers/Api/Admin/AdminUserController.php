<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\AdminUser;

class AdminUserController extends Controller
{

    public function __construct()
    {
        $this->middleware('admin.api.auth');
    }

    public function info()
    {
        $currentAdminUser = Auth::guard("admin_api")->user();
        return $currentAdminUser;
    }

    public function list()
    {
        return AdminUser::paginate(10);
    }
}