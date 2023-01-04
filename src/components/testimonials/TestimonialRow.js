import React from 'react';
import { Row, Col } from 'reactstrap';
import TestimonialCard from './TestimonialCard';

const TestimonialRow = ({rowSet}) => {
  return (
    <>
        <Row>
            {
                rowSet.map((testimonial, idx) => {
                    return (
                        <Col lg={4} key={idx}>
                            <TestimonialCard testimonial={testimonial}/>
                        </Col>
                    )
                    })
            }
        </Row>
    </>
  )
}

export default TestimonialRow