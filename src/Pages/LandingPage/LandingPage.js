import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import './LandingPage.css';


class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {


        }
    }



    render() {

        return (
            <div>
                    <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url(dist/images/laptop-desk-office.jpg)' }} data-aos="fade" data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-md-12" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="row justify-content-center mb-4">
                                        <div className="col-md-8 text-center">
                                            <h1>Just Leave It To Us <span className="typed-words"/></h1>
                                            <p className="text-warning lead mb-5">Web Design and Development</p>
                                            <div><a  data-ratio={2} href="#contact-section" className="btn btn-warning btn-md">Contact Us Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="site-section">
                        <div className="container">
                            <div className = "section-wrapper">
                                <div className = "p-content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.
                                    </p>
                                </div>

                                <div className = "list-content">
                                    <ul className="list-unstyled ul-check primary">
                                        <li>No compromise on quality of website and applications.</li>
                                        <li>We’re quick to respond to the clients' needs.</li>
                                        <li>Delivering services and solutions right for your business.</li>
                                        <li>No worrying as we have an expert web development team.</li>
                                        <li>We build responsive websites that auto adapt to device screens.</li>
                                    </ul>

                                    <ul className="list-unstyled ul-check primary">
                                        <li>The Websites we make are optimized.</li>
                                        <li>We develop websites and web applications with the latest technologies.</li>
                                        <li>We develop web applications that improve business efficiency.</li>
                                        <li>We develop easy installation and maintenance websites and applications.</li>
                                        {/* <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium</li> */}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>


        );

    }
}
export default LandingPage;