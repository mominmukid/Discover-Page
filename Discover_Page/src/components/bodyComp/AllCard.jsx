import React, { useState, useEffect, useId } from 'react';
import { Card } from '../index';
import { fetchNews } from '../../api/AllCardData';
import Loader from '../otherCopms/Loader';

function AllCard({
  news,
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Default to loading state
  const [error, setError] = useState(null);
  const id = useId(); // Unique ID for key handling
  let search = news;
  // Fetch data from the API
  const fetchData = async (search) => {
    try {
      const articles = await fetchNews(news); // Fetch articles based on category
      if (articles && articles.length > 0) {
        setData(articles); // Set data to articles directly
      } else {
        setError("No articles found."); // Set error if no articles are returned
      }
    } catch (error) {
      setError(error.message); // Set the error message from Axios
    } finally {
      setLoading(false); // Ensure loading stops after API call finishes
    }
  };

  useEffect(() => {
    fetchData(search); // Call fetchData when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once

  // Display loading state
  if (loading) {
    return <div className="w-[100%] min-h-screen bg-[#202222] flex justify-center items-center"><Loader /></div>;
  }

  // Display error state
  if (error) {
    return <div className="w-[100%] min-h-screen bg-[#202222] flex justify-center items-center text-white font-semibold text-xl">{error}</div>;
  }

  // Display message if no data
  if (data.length === 0) {
    return <div className="w-[100%] min-h-screen bg-[#202222] flex justify-center items-center">No data available</div>;
  }

  // Display articles
  return (
    <div className="w-full min-h-screen flex flex-col gap-2  bg-[#191a1a] flex-wrap">
      {data.map((singleData, index) => (
        singleData.title !== 'Removed' && singleData.image !== null && (
          <Card data={singleData} key={id + index} news={news}
            className={`w-[95%] md:w-full`} imageHeight={`h-[15rem]`} /> // Render Card for each article unless title is 'Removed'
        )
      ))}
    </div>
  );
}

export default AllCard;

