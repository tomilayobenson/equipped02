import React from 'react';
import { Card, CardBody, Media } from 'reactstrap';

const TestimonialCard = ({testimonial}) => {
  return (
    <>           
        <Card className="rounded-bottom m-1 p-4">
            <CardBody>
                <i className="fa fa-quote-left fa-2x d-block text-info" aria-hidden="true"></i>                      
                <p className="card-text text-justify pt-3">{testimonial.description}</p>
                <i className="fa fa-quote-right fa-2x d-block text-info text-right" aria-hidden="true"></i>
                <ul className="list-unstyled d-flex justify-content-center mb-0">
                    <li>
                    <i className="fa fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                    <i className="fa fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                    <i className="fa fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                    <i className="fa fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                    <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                    </li>
                </ul>
            </CardBody>
            <hr />
            <Media>
                <img src={testimonial.image} className="mr-3 align-self-center img-fluid img-thumbnail rounded-circle" width="25%" height="auto" alt={testimonial.author} />
                <div class="media-body">
                    <h5 className="font-weight-bold">{testimonial.author}</h5>
                    <p>{testimonial.position}</p>
                </div>
            </Media>
        </Card>
    </>
  )
}

export default TestimonialCard;