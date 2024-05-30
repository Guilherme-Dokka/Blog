import axios from "axios";

//local APi: http://localhost:4000/

const api = axios.create({ baseURL: "https://api-blog-gamma.vercel.app/" });

export default api;
