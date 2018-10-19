import axios from "axios";

const API_URL = "http://localhost:3030/api/1";

export default class api {
  getMenu = async () => {
    try {
      return await axios.get(`${API_URL}/menu`);
    } catch (error) {
      console.error(error);
    }
  };
}
