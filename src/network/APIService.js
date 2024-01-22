import axios from 'axios';

const API_BASE_URL = ''; // Replace with your actual API base URL

class APIService {
  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      // You can add additional Axios configuration options here, e.g. headers, timeout, etc.
    });
  }

  async deleteFavourite(id, token) {
    try {
      const response = await this.api.delete(
        '/v1/favourite?favouriteId=' + id,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
      console.log('deleteFavourite : ', JSON.stringify(response));
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}

export default new APIService();
