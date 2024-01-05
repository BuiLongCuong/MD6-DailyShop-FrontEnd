import axios from "axios";

export function getAxios() {
    return axios.create({
        baseURL: "http://localhost:8088"
    })
}