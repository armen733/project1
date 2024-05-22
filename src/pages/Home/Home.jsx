import React from 'react'
import "./Home.css"
import Slider from './Slider/Slider'

const Home = ({products}) => {
  // console.log(products);

  const imgs = products.map((prod)=>{
   return prod.image
  })

  const prodName = products.map((prod)=>{
    return prod.title
  })

  return (
    <div className='home'>
     <div><h1>Home</h1></div> 
     <div className='sliderboxing'><Slider imgs={imgs} prodName={prodName}/></div> 
    </div>
  )
}

export default Home
