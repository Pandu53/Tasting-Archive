
import axios from "axios";

export default {
    getAllConsumables() {
        return axios.get('/whiskeys')
            .then(response => {
                return response.data
            })
    },

    searchConsumableByName(searchPhrase: string) {
        return axios.get('/whiskeys/search/' + searchPhrase)
            .then(response => {
                return response.data
            })
    },

    getConsumableByTastingId(tastingid: number|string){
        return axios.get('/whiskeys/tasting/' + tastingid)
        .then(response => {
            return response.data
        })
    }
}