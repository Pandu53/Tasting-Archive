import axios from "axios";

export default {
    getAllTastings() {
        return axios.get('/tastings')
            .then(response => {
                return response.data
            })
    },
    getTastingByDate(date: string){
        return axios.get('/tastings/date/' + date)
        .then(response => {
            return response.data
        })
    }
}