import React from 'react'
import axios from 'axios';

export const Data = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  } catch (error) {
    console.error('Error fetching popular items:', error);
    throw error;
  }
};


export default Data;
