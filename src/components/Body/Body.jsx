import React from 'react'
import './Body.css'
import Pic2 from '../../assets/Pic2.jpg'
import Pic3 from '../../assets/Pic3.jpg'
import Pic4 from '../../assets/Pic4.jpg'
import Pic5 from '../../assets/Pic5.jpg'
import Pic6 from '../../assets/Pic6.jpg'
import Pic7 from '../../assets/Pic7.jpg'
import Pic8 from '../../assets/Pic8.jpg'

const Body = () => {
    return (
        <div className='body'>
            <div className='container'>
                <div className="row">
                    <div className='text-center  '>
                        <h1 >The Delhi Jewellery and Gems Fair sparkles in its 8th edition</h1>
                        <p className='text-white'>Brought together over 650 leading brands & over 300 exhibitors from Gems & Jewellery Industry</p>
                        <p className='text-white'>28th - 30th SEPTEMBER 2019, PRAGATI MAIDAN, NEW DELHI</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-8 col-md-12 col-sm-12 col-12'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-sm-12 col-12'>
                                <div class="content">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={Pic2} alt='' />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">Fair Infomation</h3>
                                        <p class="content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-sm-12 col-12'>
                            <div class="content">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={Pic3} alt='' />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">Why Delhi Jewellery</h3>
                                        <p class="content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-sm-12 col-12'>
                            <div class="content">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={Pic4} alt='' />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">Visitor Registration</h3>
                                        <p class="content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-sm-12 col-12'>
                            <div class="content">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={Pic5} alt='' />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">Exhibitor Registration</h3>
                                        <p class="content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12'>
                        <div class="content">
                            <div class="content-overlay"></div>
                            <img class="content-image" src={Pic6} alt='' />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Who are Visiting</h3>
                                <p class="content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-xs-12 col-sm-6'>
                        <div class="content">
                            <div class="content-overlay"></div>
                            <img class="content-image" src={Pic7} alt='' />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Who are Exhibiting</h3>
                                <p class="content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            </div>
                        </div>
                    <div className='col-xs-12 col-sm-6'>
                        <div class="content">
                            <div class="content-overlay"></div>
                            <img class="content-image" src={Pic8} alt='' />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">News And Media</h3>
                                <p class="content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body