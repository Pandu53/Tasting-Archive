
import axios from "axios";

export default {
    getAllConsumables() {
        return axios.get('/consumables')
            .then(response => {
                return response.data
            })
    },

    searchConsumableByName(searchPhrase: string) {
        return axios.get('/consumables/search/' + searchPhrase)
            .then(response => {
                return response.data
            })
    },

    getConsumableByTastingId(tastingid: number|string){
        return axios.get('/consumables/tasting/' + tastingid)
        .then(response => {
            return response.data
        })
    }
}