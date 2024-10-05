import axios from 'axios';

export const fetchNews = async (category) => {
  // const API_KEY = '7557f4f6b10947d1b0f1ed84b39a0b77';
  const API_KEY = 'b522b8d231ccacddcff31b388fe010f7';
  const API_KEY = '1b78fd5dbe394cdc99038fc2bbb389ed';
  const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data.articles; // Directly return the articles array from the response
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error; // Throw the error so it can be handled in the component
  }
};
