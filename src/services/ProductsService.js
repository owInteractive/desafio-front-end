import { http } from "./config";

export default {
  getAll: () => {
    return http.get("https://api.myjson.com/bins/9e9fl");
  }
};
