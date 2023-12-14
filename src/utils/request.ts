// 对于axios函数库进行二次封装
// 二次封装的目的:
// 目的1:利用axios请求、响应拦截器功能;
// 目的2:请求拦截器,一般可以在请求头中携带公共的参数:token;
// 目的3:响应拦截器,可以简化服务器返回的数据,处理http网络错误。
import axios from "axios";
import { ElMessage } from 'element-plus';
// 使用  axios.create 方法创建一个 axios实例 可以进行基础路径、超时时间的设置
const request = axios.create({
    // 设置请求基础路径
    baseURL: '/api',
    // 设置请求超时时间 5s
    timeout: 5000
});

// 请求拦截器
request.interceptors.request.use((config) => {
    // config:请求拦截器回调注入的对象(配置对象),获取配置对象headers属性
    // 可以通过请求头携带公共参数-token
    return config;
});

// 响应拦截器
request.interceptors.response.use((response) => {
    // 响应拦截器成功的回调,一般会进行简化数据
    return response.data;
}, (error) => {
    console.log(error);

    let status = error.response.status;
    switch (status) {
        case 404:
            ElMessage({
                type: 'error',
                message: '请求路径出现问题'
            })
            break;
        case 500 | 501 | 502 | 503 | 504 | 505:
            ElMessage({
                type: 'error',
                message: '服务器异常'
            })
            break;
        case 401:
            ElMessage({
                type: 'error',
                message: '参数有误'
            })
            break;
    }
    return Promise.reject(new Error(error.message));
});

// 对外暴露创建的 request (axios实例)
export default request;