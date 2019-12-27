import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/miguelseguramx/dbJSONServer'
})

export default axiosClient