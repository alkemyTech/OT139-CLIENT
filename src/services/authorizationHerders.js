import axios from "axios";
import getToken from './tokenService';

const autorizationHeader = () => {
    const token = getToken();
    return axios.defaults.headers = { "Authorization": token };
}

export default autorizationHeader;