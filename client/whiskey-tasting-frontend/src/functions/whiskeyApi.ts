
import axios from "axios";

export default {
    getAllWhiskeys() {
        return axios.get('/whiskeys')
            .then(response => {
                return response.data
            })
    },

    searchWhiskeyByName(searchPhrase: string) {
        return axios.get('/whiskeys/search/' + searchPhrase)
            .then(response => {
                return response.data
            })
    },

    getWhiskeyByTastingId(tastingid: number|string){
        return axios.get('/whiskeys/tasting/' + tastingid)
        .then(response => {
            return response.data
        })
    }
}