import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import Feature from '../../components/Featured/Feature'
import Slide from '../../components/Slide/Slide'
import './Home.scss'

const home = () => {
  return (
    <div>
      <Slide />
      <Feature type={'featured'} />
      <Categories />
      <Feature type={'trending'} />
      <Contact />
    </div>
  )
}

export default home