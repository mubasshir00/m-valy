import React, { useEffect, useState } from 'react'

import './Home.css'
import imagesArray  from './data'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'

import Sidenav from './sidenav/Sidenav'
import Sidenavright from './sidenav/Sidenavright'
import Product from '../product/Product'
import Productbycategory from '../product/Productbycategory'
import Footer from '../footer/Footer'

const Home = () => {

    const [images, setImages] = useState(imagesArray);
    const [index, setIndex] = useState(0);

    // console.log(images);

    const prevSlide = () =>{
        setIndex((oldIndex)=>{
            let index = oldIndex - 1;
            if(index <0){
                index = images.length -1 ;
            }
            return index;
        })
    }
    const nextSlide = () =>{
        setIndex((oldIndex)=>{
            let index = oldIndex +1;
            if(index>=images.length){
                index = 0;
            }
            return index ;
        })
    }

    useEffect(() => {
        let slider = setInterval(()=>{
            setIndex((oldIndex)=>{
                let index = oldIndex +1;
                if(index>images.length-1){
                    index=0;
                }
                return index;
            })
        },5000)
        return () => {
            clearInterval(slider)
        }
    }, [index])

    return (
        <>
        <div className="home">
            <div className="homeWrapper">
                <div className="sideNavContainer">
                <Sidenav/>
                </div>
                <div className="homeContainer">
            {
                images.map((item,itemIndex)=>{
                    const{id,image} =item;

                    let position = "nextSlide";
                    if(itemIndex === index){
                        position = "activeSlide"
                    }
                    if(itemIndex === index-1 || (index === 0 && itemIndex === images.length-1)){
                        position = "lastSlide"
                    }

                    return (
                        <article className={position}>
                            <img src={image} alt="" className="bannerImg"/>
                        </article>
                    )
                })
            }
           <div className="btnContainer">
           <button className="prev" onClick={prevSlide}>
                <FaChevronLeft/>
            </button>
            <button className="next" onClick={nextSlide}>
                <FaChevronRight/>
            </button>
           </div>
            </div> 
                <div className="sideNavRight">
                    <Sidenavright/>
                </div>
                <div className="responsiveDiv">
                <div className="sideNavContainer">
                <Sidenav/>
                </div>
                <div className="sideNavRight">
                    <Sidenavright/>
                </div>
                </div>
            </div>  
        </div>
        <Product/>
        <Productbycategory/>
        <Footer/>
        </>
    )
}

export default Home
