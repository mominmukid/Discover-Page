// import React from 'react'
// import { useState, useEffect } from 'react';
// import { fetchNews } from '../api/AllCardData'
// import { useParams } from 'react-router';
// import { Loader } from '../components';

// function DetailsPage() {

//    const [data, setData] = useState([]);
//    const [loading, setLoading] = useState(true)
//    const [error, setError] = useState(null);
//    const [item, setItem] = useState(null)
//    const params = useParams();
//    const search = params.news;
//    const title = params.title;



//    // Fetch data from the API
//    const fetchData = async (search) => {
//       try {
//          const articles = await fetchNews(search); // Fetch articles based on category
//          if (articles && articles.length > 0) {
//             setData(articles); // Set data to articles directly
//             console.log(data);
            
//          } else {
//             setError("No articles found."); // Set error if no articles are returned
//          }
//       } catch (error) {
//          setError(error.message); // Set the error message from Axios
//       } finally {
//          setLoading(false); // Ensure loading stops after API call finishes
//       }
//    };

//    useEffect(() => {
//       fetchData(search); // Call fetchData when the component mounts
//    }, []);
//    // Empty dependency array ensures the effect runs only once

//    useEffect(() => {
//       if (data && data.length > 0) {
//          const item = data.find((item) => item.title === title);
//          setItem(item)
//          console.log(item);
//       }
//    }, [fetchData])
//    // Display loading state
//    if (loading) {
//       return <div className="w-[100%] min-h-screen bg-[#202222] flex justify-center items-center"><Loader /></div>;
//    }

//    // Display error state
//    if (error) {
//       return <div className="w-[100%] min-h-screen bg-[#202222] flex justify-center items-center">{error}</div>;
//    }

//    // Display message if no data
//    if (data.length === 0) {
//       return <div className="w-[100%] min-h-screen bg-[#202222] flex justify-center items-center">No data available</div>;
//    }
//    return (
//       <div>DetailsPage</div>
//    )
// }

// export default DetailsPage

import React from 'react'

function DetailsPage() {
  return (
    <div>DetailsPage</div>
  )
}

export default DetailsPage