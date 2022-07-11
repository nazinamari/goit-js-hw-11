import axios from 'axios';
export { fetchImg };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '28566237-c89de66335755423ec83ff5c2';

async function fetchImg(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}