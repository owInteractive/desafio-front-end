import axios from "axios";
const baseURL = "https://raw.githubusercontent.com/owInteractive";

const configAxios = axios.create({
  baseURL,
  timeout: 10000,
});

export default configAxios;
