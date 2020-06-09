import React, { Component } from 'react';
import './WorkPage.css';
import UXDesign from '../../assets/icons/001-ux.svg';
import WevDevelopment from '../../assets/icons/002-web-development.svg';
import Launching from '../../assets/icons/003-rocket.svg';
import Strategy from '../../assets/icons/004-sport.svg';
import sbmcWebsite from '../../assets/img/sbmc-website.png';

class WorkPage extends Component {

    constructor(props) {
        super(props);

        this.state = {


        }
    }



    render() {

        return (
            <div>
                <section className="site-section" id="work-section">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-8 text-center">
                                <h2 className="text-black h1 site-section-heading text-center">Our Works</h2>
                                <p className="lead">We work hard to acquire our customer’s satisfaction and achieve their aspiration. You can see a list of what we've recently done.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <a href={sbmcWebsite} className="media-1" data-fancybox="gallery">
                                    <img src={sbmcWebsite} alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Project #1</h2>
                                        <span className="category">Website</span>
                                        
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_2.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_2.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Project #2</h2>
                                        <span className="category">Web Design</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_3.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_3.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Project #3</h2>
                                        <span className="category">Website</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_4.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_4.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Project #4</h2>
                                        <span className="category">Web Application</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_5.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_5.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Project #5</h2>
                                        <span className="category">Web Design</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_6.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_6.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Project #6</h2>
                                        <span className="category">Website</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Process 1 */}

                <div className="site-section border-bottom" id="process-section">
                        <div className="container-fluid our-process-container">
                            <div className="row-2 d-flex justify-content-center header-our-process">
                                <div className="wrapper-our-process">
                                    <h2 className="text-black h1 site-section-heading">Our Process</h2>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center desc-our-process">
                                <div className="wrapper-our-process">
                                    <p>
                                    We go back to basics and understand what our clients and their users need to do. We build from the ground up applying industry-standard development methods, so it’s tailored to your needs and goals.</p>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center ">                              
                           
                                <div className="col-xl-2 process-member">
                                    <div className="person">
                                        <img src={Strategy} alt="Image" className=" w-50 mb-5" data-aos="fade-up" data-aos-delay={200} />
                                        <h3 className="process-h">Planning</h3>
                                        <p className="mb-4"  id = "process-desc">Understanding what you want to get out of your website or web application, and what you wish to achieve and how to implement it.</p>
                                        
                                    </div>
                                </div>

                                <div className="col-xl-2 process-member" data-aos="fade" data-aos-delay={100}>
                                    <div className="person">
                                        <img src={UXDesign} alt="Image" className=" w-50 mb-5" data-aos="fade-up" data-aos-delay={300} />
                                        <h3 className="process-h">Design</h3>
                                        
                                        <p className="mb-4" id = "process-desc">Designing the layout and interface. It will help in knowing the final picture of the website or web application.</p>
                                        
                                    </div>
                                </div>

                                <div className="col-xl-2 process-member" data-aos="fade" data-aos-delay={100}>
                                    <div className="person">
                                        <img src={WevDevelopment} alt="Image" className=" w-50 mb-5" data-aos="fade-up" data-aos-delay={400} />
                                        <h3 className="process-h">Development</h3>                                        
                                        <p className="mb-4" id = "process-desc">Create the application and all its functionalities. Once the site is ready, it should be checked and tested to ensure an error free working.</p>
                                        
                                    </div>
                                </div>
                                <div className="col-xl-2 process-member" data-aos="fade" data-aos-delay={100}>
                                    <div className="person">
                                        <img src={Launching} alt="Image" className=" w-50 mb-5" data-aos="fade-up" data-aos-delay={500} />
                                        <h3 className="process-h">Launch</h3>
                                        
                                        <p className="mb-4" id = "process-desc">After successfully testing the application it is delivered / deployed.</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* testimonials */}

                    <section className="site-section testimonial-wrap">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8 text-center">
                                    <h2 className="text-black h1 site-section-heading text-center">Testimonials</h2>
                                </div>
                            </div>
                        </div>
                        <div className="slide-one-item home-slider owl-carousel">
                            <div>
                                <div className="testimonial">
                                    <blockquote className="mb-5">
                                        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p>
                                    </blockquote>
                                    <figure className="mb-4 d-flex align-items-center justify-content-center">
                                        <div><img src="dist/images/person_3.jpg" alt="Image" className="w-50 img-fluid mb-3" /></div>
                                        <p>John Smith</p>
                                    </figure>
                                </div>
                            </div>
                            <div>
                                <div className="testimonial">
                                    <blockquote className="mb-5">
                                        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p>
                                    </blockquote>
                                    <figure className="mb-4 d-flex align-items-center justify-content-center">
                                        <div><img src="dist/images/person_2.jpg" alt="Image" className="w-50 img-fluid mb-3" /></div>
                                        <p>Christine Aguilar</p>
                                    </figure>
                                </div>
                            </div>
                            <div>
                                <div className="testimonial">
                                    <blockquote className="mb-5">
                                        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p>
                                    </blockquote>
                                    <figure className="mb-4 d-flex align-items-center justify-content-center">
                                        <div><img src="dist/images/person_4.jpg" alt="Image" className="w-50 img-fluid mb-3" /></div>
                                        <p>Robert Spears</p>
                                    </figure>
                                </div>
                            </div>
                            <div>
                                <div className="testimonial">
                                    <blockquote className="mb-5">
                                        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p>
                                    </blockquote>
                                    <figure className="mb-4 d-flex align-items-center justify-content-center">
                                        <div><img src="dist/images/person_5.jpg" alt="Image" className="w-50 img-fluid mb-3" /></div>
                                        <p>Bruce Rogers</p>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>

            </div>

        );

    }
}
export default WorkPage;