import React from 'react';
import webDesign from '../../../images/service1.png'
import graphicDesign from '../../../images/service2.png'
import webDevelopment from '../../../images/service3.png'
import Services from '../Services/Services';
const services = [
    {
        icon : webDesign,
        title : 'Web & Mobile design',
        description : 'We Craft stunning and amazing web UI, using a well drafted UX to fit your product',
    },
    {
        icon : graphicDesign,
        title : 'Graphic design',
        description : 'Amazing flyers, social media posts and brand representations that would make your brand stand out',
    },
    {
        icon : webDevelopment,
        title : 'Web development',
        description : 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general',
    },
]
const Service = () => {
    return (
        <div className="container mt-5">
           <h1 className="text-center font-weight-bold">Provide awesome <span style={{color:"#7AB259"}}>sevices</span></h1>
           <div className="row mt-5">
        {
        services.map(services =><Services services={services}></Services>)
        
        }
        </div>
        </div>
    );
};

export default Service;