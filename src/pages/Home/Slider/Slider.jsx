import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "./Slider.css"

const Slider = ({imgs, prodName}) => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const next = () =>{
      setSliderIndex(
        sliderIndex => {
            if(sliderIndex === imgs.length - 1){
                return 0;}
            else {
                return sliderIndex + 1
            }
        } 
      )}
    const previous = ()=>{
        setSliderIndex(
            sliderIndex =>{
                if (sliderIndex === 0) {
                    return imgs.length - 1
                } else {
                    return sliderIndex - 1
                }
            }
        )
    }
    
  return (
    <div className='sliderbox'>
        <div><h2>Our Available Products</h2></div>
        <div className='imgdiv'>
            <img className='sliderimg' src={imgs[sliderIndex]} alt="" />
        </div>
        <div className='btndiv'>
            <button className='btnn' onClick={previous}> <FaArrowLeft />Previous</button>
            <button className='btnn' onClick={next}>Next <FaArrowRight /></button>    
        </div>
    </div>
  )
}

export default Slider
