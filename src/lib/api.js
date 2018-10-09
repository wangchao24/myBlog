import axios from 'axios';
import qs from 'qs'

let ajax = axios.create({
    baseURL: '',
    timeout: '60000',
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        data = qs.stringify(data);
        return data;
    }],
})


// 添加请求拦截器
ajax.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
ajax.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default ajax;