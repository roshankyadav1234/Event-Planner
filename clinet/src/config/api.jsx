import  axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:4500",
    withcredentials:true,
});

export default api;