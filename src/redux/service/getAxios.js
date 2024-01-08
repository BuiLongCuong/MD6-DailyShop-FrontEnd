import axios from "axios";

export function getAxios() {
    // let currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
    // if(currentCustomer) {
    //     return axios.create({
    //         baseURL: "http://localhost:8088/",
    //         headers: {"Authorization": `Bearer ${currentCustomer.accessToken} `}
    //     })
    // }else {
    //     return axios.create({
    //         baseURL: "http://localhost:8088/"
    //     })
    // }
    return axios.create({
        baseURL: "http://localhost:8088/"
    })
}