// import axios from 'axios';

// export const fetchNews = async (category) => {
//   // const API_KEY = '7557f4f6b10947d1b0f1ed84b39a0b77';
//   const API_KEY = '1b78fd5dbe394cdc99038fc2bbb389ed';
//   const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`;

//   try {
//     const response = await axios.get(url);
//     return response.data.articles; // Directly return the articles array from the response
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     throw error; // Throw the error so it can be handled in the component
//   }
// };


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



