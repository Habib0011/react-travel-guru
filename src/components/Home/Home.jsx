import React from 'react';
import './Home.css'
import { FaArrowRight } from "react-icons/fa6";
import pic1 from '../../assets/images/Rectangle 1.png'
import pic2 from '../../assets/images/Sreemongol.png'
import pic3 from '../../assets/images/sundorbon.png'
import Navbar from './Navbar';


const Home = () => {
    return (
        <div className='contaainer'>
            <Navbar></Navbar>
            <div className='bnr-container'>
                <div className='grid grid-cols-1 md:grid-cols-4  max-w-5xl mx-auto   '>
                    <div className='md:col-span-1'>
                        <h1 className='text-4xl my-4 text-white'>COX'S BAZAR</h1>
                        <p className=' my-4  text-white text-lg'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <div className=' flex items-center r'>
                            <button className='all-btn' >Booking
                            </button><FaArrowRight className='arrow' />
                        </div>
                    </div>
                    <div className='md:col-span-3 ms-20'>
                        <div className="carousel rounded-box home  gap-6 ">
                            <div className="carousel-item">
                                <h1 className='text text-xl font-extrabold' >COX BAZAR</h1>
                                <img
                                    src={pic1}
                                    alt="Burger" />

                            </div>
                            <div className="carousel-item">
                                <img
                                    src={pic2}
                                    alt="Burger" />
                                <h1 className='text text-xl font-extrabold' >SREEMANGAL</h1>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={pic3}
                                    alt="Burger" />
                                <h1 className='text text-xl font-extrabold' >SUNDERBAN</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;