import axios from "axios";
import { REACT_APP_API_URL } from "../config/enviroment";

const ApiMain = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default ApiMain;