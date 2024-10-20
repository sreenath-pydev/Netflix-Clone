import axios from "axios";
import {baceUrl} from './Constants/Constants'
const instance = axios.create({
    baseURL: baceUrl,
});

export default instance