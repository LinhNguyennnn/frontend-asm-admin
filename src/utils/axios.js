import axios from "axios";

const baseURL = process.env.REACT_APP_PORT || 'http://localhost:8080';

const intanceAxios = axios.create({ baseURL });

export default intanceAxios;