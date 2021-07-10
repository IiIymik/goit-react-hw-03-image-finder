import axios from 'axios';
import { API_KEY } from 'constants/index';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (searchingImages, pageNum) => {
  const params = `per_page=12;page=${pageNum}`;
  const response = await axios.get(`/?key=${API_KEY}&q=${searchingImages}&pretty=true&${params}`);
  // console.log("🚀 ~ file: api.js ~ line 9 ~ response", response)
  return response.data.hits;
}
