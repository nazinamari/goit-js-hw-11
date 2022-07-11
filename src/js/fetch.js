import axios from 'axios';
export { fetchImg };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '28544484-259b47bf7f7000ebfc4f498cb';

async function fetchImg(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}