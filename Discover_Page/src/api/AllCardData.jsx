


import axios from 'axios';
const apiKey = String(import.meta.env.VITE_APP_PROJECT_KEY);
const apiurl= String(import.meta.env.VITE_APP_PROJECT_URL);
console.log(apiKey);


export const fetchNews = async (category) => {
  const url = `${apiurl}/v1/news?access_key=${apiKey}&categories=${category}&limit=100`;

  try {
    const res = await axios.get(url);
    // const response=await res.json();
    console.log(res.data.data);

    return res.data.data;

    // return response; // Directly return the articles array from the response
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error; // Throw the error so it can be handled in the component
  }
};



