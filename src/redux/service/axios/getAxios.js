import axios, {get} from "axios";

export function getAxios() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"));
    if (currentUser){
        return axios.create({
            baseURL: "http://localhost:8088",
            headers:{"Authorization":`Bearer ${currentUser.accessToken}`}
        })
    } else if (currentSupplier) {
        return axios.create({
            baseURL: "http://localhost:8088",
            headers: {"Authorization": `Bearer ${currentSupplier.accessToken}`}
        })
    }

    else {
        return axios.create({
            baseURL: "http://localhost:8088"
        })
    }

}
export const register = (newSupplier)=>{
    return getAxios().post("suppliers/register", newSupplier)
}