import axios from 'axios'

export const baseURL='http://api.mi.agncha.com/'
//创建axios实例
const server = axios.create({
  baseURL: baseURL,
})
const api = axios.create({
  baseURL: baseURL,
})
//请求拦截
server.interceptors.request.use(
  (config) => {
    
    if (localStorage.getItem('token') != null) {
      config.headers['token'] = localStorage.getItem('token')
    }
    return config
  },
  (error) => {
    console.log('请求error:' + error)
    return Promise.reject(error)
  }
)
//响应拦截
server.interceptors.response.use(
  (res) => {
    console.log(res)
    if(res.data.code!=200){
      return Promise.reject(res.data)
    }
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)
api.interceptors.response.use(
  (res) => {
    if(res.data.code!=200){
      return Promise.reject(res.data)
    }
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export  {server,api}
