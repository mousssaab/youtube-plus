import axios from 'axios';
import { API_URL, API_KEY, MAX_RESULTS } from '../constants';

export default axios.create({
    baseURL: API_URL,
    params: {
        part: 'snippet',
        maxResults: MAX_RESULTS,
        key: API_KEY
    }
});
