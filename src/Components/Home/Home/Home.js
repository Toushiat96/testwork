import React from 'react';
import Contact from '../../../Contact/Contact';



import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Tools></Tools>
            <ClientFeedback></ClientFeedback>
            <Contact></Contact>
            <Footer></Footer>
        
        </div>
    );
};

export default Home;