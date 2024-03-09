import axios from "axios";

const BASE_API_URL = "http://localhost:3001";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    console.log(result.data)
    return result.data;
  }
  static async getDrinks() {
    const drinks = await axios.get(`${BASE_API_URL}/drinks`);
    console.log(drinks.data);
    return drinks.data;
  }

  // static async addItem(foodtype, data) {
  //   const result = await axios.post(`${BASE_API_URL}/snacks`, data)
  //   return result.data;
  // }
}

export default SnackOrBoozeApi;
