import axios from 'axios'

//增加默认的请求路径
axios.defaults.baseURL='http://localhost:3000'

axios.interceptors.response.use((res)=>{
  return res.data; //在这里统一拦截结果 把结果处理成res.data
})

//获取轮播图数据 ，返回的是一个promise
export let getSliders= ()=>{
  return axios.get('/sliders');
};

export let getHotBook=()=>{
  return axios.get('/hot');
}

//得到所有图书
export let getBooks=()=>{
  return axios.get('/book')
}

//删除某个图书
export let deleteBook=(id)=>{
  return axios.delete(`/book?id=${id}`)
}

export let getOneBook=(id)=>{
  return axios.get(`/book?id=${id}`)
}

export let updateBook=(id,data)=>{
  return axios.put(`/book?id=${id}`,data)
}

export let addBook=(data)=>{
  return axios.post('/book',data)
}

export let getAll=()=>{
  return axios.all([getSliders(),getHotBook()]);
}