import axios from 'axios';

export async function getAllProducts() {
  const response = await axios.get(`https://api.escuelajs.co/api/v1/products`);

  return response.data;
}
