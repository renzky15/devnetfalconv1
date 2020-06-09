import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage/LandingPage';
import Header from '../components/Header';
import WorkPage from '../Pages/WorkPage/WorkPage';
import ServicesPage from '../Pages/ServicesPage/ServicesPages';

import AboutPage from '../Pages/AboutPage/AboutPage';
import BlogPage from '../Pages/BlogPage/BlogPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import Footer from './Footer';


function AppRouter() {
    return (
        <Router>
            <Switch>
                
              
                    <div className="site-wrap">
                    <Header/>
                    <LandingPage />
                    <WorkPage />
                    <ServicesPage />
                    
                    <AboutPage />
                    {/* <BlogPage /> */}
                    <ContactPage />
                    <Footer />
                    </div>

                    

            </Switch>
        </Router>
    )
}

export default AppRouter;