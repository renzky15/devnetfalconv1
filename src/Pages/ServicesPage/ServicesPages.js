import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import './ServicesPage.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


class ServicesPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            modal_title: '',
            services_list: []

        }
    }

    
  onOpenModal = (d) => {
    this.setState({ open: true });
   
   if (d === 'web-design' ) {
       const web_design = [{
           list : [
               'Responsive Design',
                'Search Engine Optimization (SEO)',
                'CMS',
                'Social Media Integration',
                'Email Ads Integration'
           ]
           
       }]

      this.setState({
          modal_title: 'Web Design',
          services_list: web_design

      })
    } else if (d === 'web-app') {
        const web_app = [{
           list: [
               'eCommerce Solution',
                'Build your own application',
                'Demand',
                'Inventory',
                'Payment Processor Integration'
        ]
           
        }]
         this.setState({
          modal_title: 'Web Application',
          services_list: web_app
      })
    } else if (d === 'maintenance') {
        const maintenance = [{
           list: [
               'Backup/ Restore Data',
               
        ]
           
        }]
      this.setState({
          modal_title: 'Maintenance & Support',
          services_list: maintenance
      })
    }

  };
  onCloseModal = () => {
    this.setState({ open: false });
  };



    render() {
         const { open } = this.state;
         const modal_style = {
             width: '300px'
         }

        return (
            <div>
                <section className="site-section border-bottom" id="services-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-8 text-center" data-aos="fade-up">
                                <h2 className="text-black h1 site-section-heading text-center">Our Services</h2>
                            </div>
                        </div>
                        <div className="row align-items-stretch">
                            
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-warning icon-laptop2" /></div>
                                    <div>
                                        <h3>Web Design</h3>
                                        <p>Having a website is only part of the fight. It needs to be professional. It needs to be attractive. But most importantly, it needs to operate.</p>
                                         <button className="btn btn-warning btn-md" onClick={() => this.onOpenModal('web-design')}>Learn More</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay={200}>
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-warning icon-question_answer" /></div>
                                    <div>
                                        <h3>Web Applications</h3>
                                        <p>Improve business efficiency and growth with custom web applications designed to meet business challenges.</p>
                                         <button className="btn btn-warning btn-md" onClick={() => this.onOpenModal('web-app')}>Learn More</button>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay={500}>
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-warning icon-phonelink" /></div>
                                    <div>
                                        <h3>Maintenance & Support</h3>
                                        <p>Websites and web applications require further maintenance to ensure that your site and web application operate efficiently all the time.</p>
                                        <button className="btn btn-warning btn-md" onClick={() => this.onOpenModal('maintenance')}>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal open={open} onClose={this.onCloseModal} center>
                            <div className = "container">
                            <br/>
                            <h2>{this.state.modal_title}</h2>
                            <div>
                            <p>
                                Service Includes:
                            </p>
                            <div className = "list-content">
                                    <ul className="list-unstyled ul-check primary">
                                        {
                                            this.state.services_list.map( service => 
                                                service.list.map(list => <li>{list}</li>)
                                            )
                                        }
                                    </ul>

                                    
                                </div>
                            </div>
                             

                            </div>
                             
                        </Modal>
                    </div>
                </section>


            </div>


        );

    }
}
export default ServicesPage;