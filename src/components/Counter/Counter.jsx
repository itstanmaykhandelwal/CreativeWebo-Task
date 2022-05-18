import React from 'react'
import CountUp from 'react-countup'
import './Counter.css'

const Counter = () => {
    return (
        <div className='counter'>
            <div className="container text-center bg-dark text-white py-3">
                <div className="row ten-columns">
                    <div class="col-sm-2">
                        <i className="fa-solid fa-handshake"></i>
                        <h2><CountUp end={600} /></h2>
                        <p>Media Partner</p>
                    </div>
                    <div class="col-sm-2">
                        <i className="fa-solid fa-user-group"></i>
                        <h2><CountUp end={2000} />+</h2>
                        <p>Trade Visitors</p>
                    </div>
                    <div class="col-sm-2">
                        <i className="fa-solid fa-user-tie"></i>
                        <h2><CountUp end={1200} /></h2>
                        <p>Delegates & VIPS</p>
                    </div>
                    <div class="col-sm-2">
                        <i className="fa-solid fa-microphone"></i>
                        <h2><CountUp end={200}/></h2>
                        <p>Conference Speaker</p>
                    </div>
                    <div class="col-sm-2">
                        <i className="fa-solid fa-vector-square"></i>
                        <h2><CountUp end={18000}/></h2>
                        <p>SQM Exhibit</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Counter