import axios from axios;
import QS from 'qs';

/**
 * 环境的切换
 * 通过node环境变量来匹配接口的url前缀
 * axios.defaults.baseURL可以设置axios的默认请求地址
 *  */
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'development';
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'production';
}

/**
 * 创建axios实例设置请求超时
 */
const instance = axios.create({ timeout: 1000 * 12 });
// axios.defaults.timeout = 10000;

/**
 * post请求头设置
 */
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**
 * 请求拦截
 * 我们在发送请求前可以进行一个请求的拦截，为什么要拦截呢？
 * 有些请求是需要用户登录之后才能访问的，
 * 或者post请求的时候，我们需要序列化我们提交的数据。
 * 这时候，我们可以在请求被发送之前进行一个拦截，从而进行我们想要的操作。
 */
instance.interceptors.request.use((config) => {
  const token = store.state.token;
  token && (config.headers.Authorization = token);
  return config;
}, error => {
  return Promise.error(error);
});

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  // 请求成功
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 404请求不存在
        case 404:
          console.log('网络请求不存在');
          break;
        default:
          console.log(error.response.data.message);
      }
    }
    return Promise.reject(error.response);
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((reslove, reject) => {
    axios.get(url, { params: params }).then(res => {
      reslove(res.data);
    }).catch(err => {
      reject(err.data);
    })
  })
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
