import React from 'react';
import Herosection from '../Components/Herosection';
import Reviews from '../Components/Reviews';
import Popularitems from '../Components/Popularitems';
function Homepage() {
  return (
    <>
      <Herosection/>
      <Popularitems/>
      <Reviews/>
    </>
  )
}

export default Homepage
