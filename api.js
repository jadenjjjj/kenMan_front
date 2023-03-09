import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // replace with your backend URL
});

export const getItems = async () => {
  try {
    const response = await api.get('/mangas');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
