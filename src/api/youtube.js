import axios from 'axios'

const KEY = 'AIzaSyBRaXd6lSWl4tGnF4LN3yuUuGtGDCEVi7w'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})