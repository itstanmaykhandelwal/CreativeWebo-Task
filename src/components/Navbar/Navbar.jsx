import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <navbar>
                <nav class="navbar d-none d-sm-block">
                    <div className='container'>
                        <span class="navbar-text">
                            26-28 September 2020 | Pragati Maidan, New Delhi
                        </span>
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">Post Show Report 2019</a>
                            </li>
                        
                    </ul>
                    </div>
                </nav>
                
                <hr />
                <nav className="navbar navbar-expand-lg">
                    <div className="container ">
                        <a className="navbar-brand " href="/">Logo</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-md-auto text-white">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Fair Info</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Exhibitor</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Visitor</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Press</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Travel Info</a>
                                </li>
                                <button className='btn btn-light rounded-pill'>
                                    Register Now
                                </button>
                            </ul>
                        </div>
                    </div>
                </nav>
            </navbar>
        </>
    )
}

export default Navbar