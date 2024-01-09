import axios, {get} from "axios";

export function getAxios() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser){
        return axios.create({
            baseURL: "http://localhost:8088",
            headers:{"Authorization":`Bearer ${currentUser.accessToken}`}
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