import { userInstance } from "../Axios/axiosinstance";

export const userRegister=(values)=>{
    console.log(values)
    return userInstance.post("/register",{...values})
}

export const login=(values)=>{
    console.log(values,"8888888888888s")
    return userInstance.post("/login",{...values})
}

export const appreg=(values)=>{
    console.log(values,"8888888888888888")
    return userInstance.post(`/upload`,{...values},{headers:{"content-Type":"multipart/form-data"}})
}

export const userHeader=()=>{
    return userInstance.get("/header")
}