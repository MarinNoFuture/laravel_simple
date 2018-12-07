import axios from "axios";
import router from "../router";
import { MessageBox } from "element-ui";

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
if(localStorage.getItem('ms_token')){
    axios.defaults.headers.post["Accept"] = "application/vnd.marvin.system+json";
    axios.defaults.headers.post["Authorization"] = 'Bearer ' + localStorage.getItem('ms_token');
}
let instance = axios.create({
    baseURL: "/api",
    timeout: 30000
});

axios.defaults.retry = 1;
axios.defaults.retryDelay = 1000;
instance.interceptors.response.use(
    res => {
        return res.data;
    },
    error => {
        if (error.response) {

            switch (error.response.status) {
                case 401:
                    MessageBox({
                        title: "提示",
                        message: "登录信息过期",
                        confirmButtonText: "确定",
                        callback: action => {
                            localStorage.removeItem('ms_username');
                            localStorage.removeItem('ms_token');
                            router.push('/login');
                        }
                    });
            }
        }
        return Promise.reject(error.response.data)
    }
);

export default instance;
