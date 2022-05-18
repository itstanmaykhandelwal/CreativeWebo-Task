import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='px-4 py-5 text-center'>
            <div className='py-5'>
                <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <h1 class="display-5 fw-bold text-white lead">
                                Meet the expo 2020 Delhi Jewellery and Gems Fair
                            </h1>
                        </div>
                        <div class="d-sm-flex justify-content-sm-center ">
                            <button type="button" className="btn btn-outline-warning rounded-pill btn-lg px-4 me-sm-3 fw-bold">BOOK YOUR STAND</button>
                            <button type="button" className="btn btn-outline-light rounded-pill btn-lg px-4 fw-bold">REGISTER AS VISITOR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Hero