import React from 'react'
import FeaturedSection from '../components/home/FeaturedSection'
import HomeCats from '../components/home/HomeCats'
import HomeTop from '../components/home/HomeTop'

function Home() {
  return (
    <>
      <HomeTop />
      <FeaturedSection />
      <HomeCats />
    </>
  )
}

export default Home