import React from 'react';
import { Container, Row, Col, Form, Input, Button, InputGroup,InputGroupText } from 'reactstrap';
// import backImg from "../data/assets/img/joyful-lady.jpg"

const Banner = () => {
    // const jumbStyle = { backgroundImage: 'url('+backImg +')'};
  return (
    <div className="jumbotron jumbotron-fluid m-0">
        <Container>
            <h1 className="display-3">Equipped</h1>
            <p className="lead">Everything you need on the go...</p>
            <hr className="w-50 my-4 ml-0 d-none d-md-block" />         
            <Form>
                <Row>
                    <Col md={6}>
                        <InputGroup>
                            <Input className="form-control form-control-lg form-rad" id="searchbar" placeholder="Search here" />
                            <InputGroupText addonType="append">
                                <Button color="secondary" outline style={{border:'none'}} type="submit"><i className="fa fa-search"></i></Button>
                            </InputGroupText>
                        </InputGroup> 
                    </Col>
                </Row>            
            </Form>
        </Container>
    </div>
  )
}

export default Banner;