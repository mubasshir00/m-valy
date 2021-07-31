import React, { useState } from 'react'
import './Home.css'
import imagesArray  from './data'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'

const Home = () => {

    const [index, setIndex] = useState(0);
    const {image} = imagesArray[index];

    const checkNumber = (number) =>{
        if( number>imagesArray.length-1){
           return 0;
        }
        if(number<0){
            return imagesArray.length-1;
        }
        return number;
    }
    const prevHandler = () =>{
        setIndex((index)=>{
            let newIndex = index -1;
            return checkNumber(newIndex) ;
        });
    };
    const nextHandler = () =>{
        setIndex((index)=>{
            let newIndex = index +1;
            return checkNumber(newIndex);
        });
    };

    return (
        <div className="home">
            <div className="homeContainer">
                <img className="bannerImg" src={image} alt=""/>
                <div className="buttonContainer">
                <button className="prev-btn" onClick={prevHandler}>
                <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextHandler}>
                <FaChevronRight/>
                </button>  
                </div>
            </div>
        </div>
    )
}

export default Home
