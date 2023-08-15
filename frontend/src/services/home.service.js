import axios from 'axios';

export const Home = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/home');
    return response.data;
  } catch (error) {
    console.error('Error fetching latest news:', error);
  }
};
