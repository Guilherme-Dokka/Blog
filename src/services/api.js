import axios from "axios";

const api = axios.create({ baseURL: "https://api-blog-gamma.vercel.app/" });

export default api;
