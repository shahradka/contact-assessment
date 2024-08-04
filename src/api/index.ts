import axios from "axios";
import { API_URL_ROOT } from "../constants/environments";

const axios_instance = axios.create({
    baseURL: API_URL_ROOT,
    timeout: 1000,
  });

export {axios_instance}