import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64ae9195c85640541d4d4ca4.mockapi.io',
});

export const selectContacts = async () => {
  const data = await instance.get('/');
  console.log(data);
  return data;
};