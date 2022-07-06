import axios from "axios";

const apia = axios.create({
    baseURL: "http://192.168.56.1:3000"
});
export default apia
