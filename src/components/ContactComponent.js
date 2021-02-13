import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
   Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';


class Contact extends Component {

   constructor(props) {
      super(props);

      this.state = {
          firstName: '',
          lastName: '',
          phoneNum: '',
          email: '',
          agree: false,
          contactType: 'By Phone',
          feedback: '',
          touched: {
            firstName: false,
            lastName: false,
            phoneNum: false,
            email: false
         }
      };

      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(values) {
      console.log("Current state is: " + JSON.stringify(values));
      alert("Current state is: " + JSON.stringify(values));
   }


   render() {

      return (
         <div className="row row-content">
            <div className="col-12">
               <h2>Send us your Feedback</h2>
               <hr />
            </div>
            <div className="col-md-10">
               <LocalForm onSubmit={values => this.handleSubmit(values)}>
                  <Row className="form-group">
                     <Label htmlFor="firstName" md={2}>First Name</Label>
                     <Col md={10}>
                        <Control.text model=".firstName" id="firstName" name="firstName"
                              placeholder="First Name"
                              className="form-control"
                        />
                     </Col>
                  </Row>
                  <Row className="form-group">
                     <Label htmlFor="lastName" md={2}>Last Name</Label>
                     <Col md={10}>
                        <Control.text model=".lastName" id="lastName" name="lastName"
                              placeholder="Last Name"
                              className="form-control"
                        />
                     </Col>
                  </Row>
                  <Row className="form-group">
                     <Label htmlFor="phoneNum" md={2}>Phone</Label>
                     <Col md={10}>
                        <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                              placeholder="Phone number"
                              className="form-control"
                        />
                     </Col>
                  </Row>
                  <Row className="form-group">
                     <Label htmlFor="email" md={2}>Email</Label>
                     <Col md={10}>
                        <Control.text model=".email" id="email" name="email"
                              placeholder="Email"
                              className="form-control"
                        />
                     </Col>
                  </Row>
                  <Row className="form-group">
                     <Col md={{size: 4, offset: 2}}>
                        <div className="form-check">
                              <Label check>
                                 <Control.checkbox
                                    model=".agree"
                                    name="agree"
                                    className="form-check-input"
                                 /> {' '}
                                 <strong>May we contact you?</strong>
                              </Label>
                        </div>
                     </Col>
                     <Col md={4}>
                        <Control.select model=".contactType" name="contactType"
                              className="form-control">
                              <option>By Phone</option>
                              <option>By Email</option>
                        </Control.select>
                     </Col>
                  </Row>
                  <Row className="form-group">
                     <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                     <Col md={10}>
                        <Control.textarea model=".feedback" id="feedback" name="feedback"
                              rows="12"
                              className="form-control"
                        />
                     </Col>
                  </Row>
                  <Row className="form-group">
                     <Col md={{size: 10, offset: 2}}>
                        <Button type="submit" color="primary">
                              Send Feedback
                        </Button>
                     </Col>
                  </Row>
               </LocalForm>
            </div>
         </div>
      );
   }

}

export default Contact;