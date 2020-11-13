import React from 'react';
import { Form ,Button } from "react-bootstrap";
import './Contact.css'
const Contact = () => {
    return (
        <div className="container mt-5 cnt-bg">
        <h1 className="text-center"> Get in Touch!</h1>
        <p className="text-center mt-3">Please use the form below to contact us. We look forward to working with you <br/> and will get back to you as soon as possible </p>
            <div className=" col-md-10 sm-6 col-12">
            <Form className="text-center" style={{paddingLeft:'70px'}}>
              <Form.Group>
                
                <Form.Control type="text" placeholder="Your email address"  />
              </Form.Group>
              <Form.Group>
                
                <Form.Control type="text" placeholder="Subject"  />
              </Form.Group>
              <Form.Group>
           
                <Form.Control type="text" placeholder="Your name/company's name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
               
                <Form.Control as="textarea" placeholder="Message" rows="6" />
              </Form.Group>
              <Button variant="primary" type="submit">
    Send
  </Button>
            </Form>
            </div>
        </div>
    );
};

export default Contact;
