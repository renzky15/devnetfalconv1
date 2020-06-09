import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import './AboutPage.css';


class AboutPage extends Component {

    constructor(props) {
        super(props);

        this.state = {


        }
    }

    render() {

        return (
            
                <div className="container">
                    <div className="site-section" id="about-section">
                        <div className="container">
                            <div className = "row ">
                            <div className = "col-md-6 content-1-wrapper">
                                <img src="dist/images/about_1.jpg" alt="Image" className="img-fluid rounded" />
                            </div>
                                
                                <div className = "col-md-6 content-2-wrapper">

                                    <div className="row d-flex justify-content-center">
                                        <h2 className="text-black ab-cont">About Us</h2>
                                    </div>
                                    <div className = "row about-desc">
                                        <p className="lead">Every business wants to flourish reaching more customers effectively by rendering its services entirely. DevNet Falcon is a small firm that visions to be respected and trusted as a top-class web development company producing exceptional websites and web applications in Belize. We design and develop Quality, Scalable, Flexible, and Cost-Effective websites and web applications specifically for our clients' needs and goals that enhance business efficiency and growth.</p>
                                    </div>

                                </div>

                               
                            </div>

                        </div>
                    </div>
                    <div className="site-section border-bottom" id="team-section">
                        <div className="container our-team-container">
                            <div className="row d-flex justify-content-center">
                                <div className="wrapper-our-team">
                                    <h2 className="text-black h1 site-section-heading">Our Team</h2>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-xl-4 team-member">
                                    <div className="person text-center">
                                        <img src="dist/images/wakene.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>Haime Hurrissa</h3>
                                        <p className="position text-muted text-center">Founder, President</p>
                                        {/* <p className="mb-4"  id = "team-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p> */}
                                        <ul className="ul-social-circle">
                                            <li><a href="#"><span className="icon-facebook" /></a></li>
                                            <li><a href="#"><span className="icon-twitter" /></a></li>
                                            <li><a href="#"><span className="icon-linkedin" /></a></li>
                                            <li><a href="#"><span className="icon-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-4 team-member" data-aos="fade" data-aos-delay={100}>
                                    <div className="person text-center">
                                        <img src="dist/images/santillan.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>Renz Owen Santillan</h3>
                                        <p className="position text-muted text-center">Software Engineer</p>
                                        {/* <p className="mb-4" id = "team-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p> */}
                                        <ul className="ul-social-circle">
                                            <li><a href="#"><span className="icon-facebook" /></a></li>
                                            <li><a href="#"><span className="icon-twitter" /></a></li>
                                            <li><a href="#"><span className="icon-linkedin" /></a></li>
                                            <li><a href="#"><span className="icon-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-4 team-member" data-aos="fade" data-aos-delay={100}>
                                    <div className="person text-center">
                                        <img src="dist/images/canlog.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>Clark Jr. Canlog</h3>
                                        <p className="position text-muted text-center">Software Engineer</p>
                                        {/* <p className="mb-4" id = "team-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p> */}
                                        <ul className="ul-social-circle">
                                            <li><a href="#"><span className="icon-facebook" /></a></li>
                                            <li><a href="#"><span className="icon-twitter" /></a></li>
                                            <li><a href="#"><span className="icon-linkedin" /></a></li>
                                            <li><a href="#"><span className="icon-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        );

    }
}
export default AboutPage;