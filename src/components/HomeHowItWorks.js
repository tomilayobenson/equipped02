import React from 'react'
import { Container,Row, Col, Card, CardBody, CardText, Button } from 'reactstrap';

const HomeHowItWorks = () => {
  return (
    <Container className="py-5">
        <h3 className="text-center font-weight-bold">How it Works</h3>
        <Row className="my-5">
            <Col sm={4}>
                <Card className="border border-right-0 border-top-0 border-bottom-0 mb-4 mb-sm-0">
                    <div className="d-flex">
                        <div className="text-white works-p1 text-center"><p className="mb-0">01</p></div>
                        <div className="triangle-right1"></div>
                    </div>
                    <CardBody>
                      <h5 className="card-title tx-orange">SEARCH ITEM</h5>                      
                      <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, nemo non repellat est rem id corporis culpa obcaecati optio ad ullam debitis explicabo consequatur laudantium voluptas minus eligendi deserunt. Quidem?</CardText>
                      <i className="fa fa-search fa-2x tx-orange pl-5" aria-hidden="true"></i>
                     </CardBody>
                  </Card>
            </Col>
            <Col sm={4}>
                <Card className="border border-right-0 border-top-0 border-bottom-0 mb-4 mb-sm-0">
                    <div className="d-flex">
                        <div className="text-white works-p2 text-center"><p className="mb-0">02</p></div>
                        <div className="triangle-right2"></div>
                    </div>
                    <CardBody>
                    <h5 className="card-title tx-pink">CONNECT WITH VENDOR</h5>                      
                      <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, nemo non repellat est rem id corporis culpa obcaecati optio ad ullam debitis explicabo consequatur laudantium voluptas minus eligendi deserunt. Quidem?</CardText>
                      <i className="fa fa-plug fa-2x tx-pink pl-5" aria-hidden="true"></i>                     
                    </CardBody>
                </Card>
            </Col>
            <Col sm={4}>
                <Card className="border border-right-0 border-top-0 border-bottom-0 mb-4 mb-sm-0">
                    <div className="d-flex">
                        <div className="text-white works-p3 text-center"><p className="mb-0">03</p></div>
                        <div className="triangle-right3"></div>
                    </div>
                    <CardBody>
                      <h5 className="card-title tx-lemon">BUY OR RENT</h5>                      
                      <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, nemo non repellat est rem id corporis culpa obcaecati optio ad ullam debitis explicabo consequatur laudantium voluptas minus eligendi deserunt. Quidem?</CardText>
                      <i className="fa fa-shopping-cart fa-2x tx-lemon pl-5" aria-hidden="true"></i>
                     </CardBody>
                  </Card>
            </Col>
        </Row>
        <div className="text-center"><Button href="#" tag="a" className="btn-grad text-white rounded-pill px-5 py-3" size="lg">Learn More</Button></div>
    </Container>
  )
}

export default HomeHowItWorks;