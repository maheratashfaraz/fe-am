import axios from 'axios';

export function getMovies(query) {
    return axios({
        method: 'get',
        baseURL: process.env.REACT_APP_API_BASE_URL,
        url: 'search/movie',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
        },
        params: {
            query: query
        }
    })
}