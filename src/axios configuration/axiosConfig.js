import axios from "axios";

let BASE_URL=`http://localhost:8080/`;

let API=axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json"
    },
    timeout:4000
})
export default API;
