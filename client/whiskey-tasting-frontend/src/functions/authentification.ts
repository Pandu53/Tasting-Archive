import axios from "axios";


export default {
    loginRoutine(credentials){
        console.log(credentials);
        return axios.post("/login/", {
            data:{
                user: credentials.user,
                password: credentials.password
            }
        })
        .then(response => {
            return response.data
        })
    }
}