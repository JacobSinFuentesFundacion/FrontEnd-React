import axios from "axios";

const ApiMain = axios.create({
    baseURL: "http://18.117.70.59:8000",
    headers: {
        "Content-Type": "application/json",
    },
});

export default ApiMain;