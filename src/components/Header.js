import React, { Component } from 'react';
import Branding from '../assets/icons/DevNetFalcon-Logo-noTXT.png';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {


        }
    }


    render() {
        const primary_color = {
            'color': '#ff3d00'
        }
        return (
            <div>
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle" />
                        </div>
                    </div>
                    <div className="site-mobile-menu-body" />
                </div>
                <div className="border-bottom top-bar py-2 bg-dark" id="home-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <p className="mb-0">
                                    <span className="mr-3"><strong className="text-white">Phone:</strong> <a href="tel://#">+501-634-5180</a></span>
                                    <span ><strong className="text-white">Email:</strong><a href="#">info@devnetfalcon.com</a></span>
                                </p>
                            </div>
                            <div className="col-4">
                                <ul className="social-media">
                                    <li><a href="#" className="p-2"><span className="icon-facebook" /></a></li>
                                    <li><a href="#" className="p-2"><span className="icon-twitter" /></a></li>
                                    <li><a href="#" className="p-2"><span className="icon-instagram" /></a></li>
                                    <li><a href="#" className="p-2"><span className="icon-linkedin" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="site-navbar py-4 bg-white js-sticky-header site-navbar-target" role="banner">
                    <div className="container">
                        <div className="row ">
                            <div className="col-11 col-xl-4 Nav-Bra">
                            <a href="#" className="text-black h2 mb-0">
                                <img width="40" height="40" src={Branding} alt=""/>
                                <h1 className="mb-0 site-logo">
                                <span className="">DevNet</span>
                                <span className="branding-name">Falcon</span>
                                </h1>
                            </a>
                            </div>
                            <div className="col-6 col-md-8 d-none d-xl-block Nav-Bra">
                                <nav className="site-navigation position-relative text-right" role="navigation">
                                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                        <li><a href="#home-section" className="nav-link">Home</a></li>
                                        <li><a href="#work-section" className="nav-link">Work</a></li>
                                        <li>
                                            <a href="#services-section" className="nav-link">Services</a>
                                        </li>
                                        <li className="has-children">
                                            <a href="#about-section" className="nav-link">About</a>
                                            <ul className="dropdown">
                                                {/* <li><a href="#about-section">Specialties</a></li> */}
                                                <li><a href="#team-section">Our Team</a></li>
                                            </ul>
                                        </li>
                                        {/* <li><a href="#blog-section" className="nav-link">Blog</a></li> */}
                                        <li><a href="#contact-section" className="nav-link">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: 'relative', top: 3 }}><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3" /></a></div>
                        </div>
                    </div>
                </header>

            </div>




        );

    }
}
export default Header;