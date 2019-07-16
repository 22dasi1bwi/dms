import axios from 'axios'

const AXIOS = axios.create({
  baseURL: `/jokes`,
  timeout: 1000
});


export default {
    getRandomJoke() {
        return AXIOS.get(`/random`);
    },
    createJoke() {
        return AXIOS.post(``, `lol`)
    }

}


