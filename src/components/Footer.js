import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2' style={{ color: '#fff' }}>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/' style={{ color: '#fff' }}>Home</Link>
                            </li>
                            <li>
                                <Link to='/' style={{ color: '#fff' }}>Purchase/Rent??</Link>
                            </li>
                            <li>
                                <Link to='/sites' style={{ color: '#fff' }}>?????</Link>
                            </li>
                            {/* Links to about and sites shoudl change to purchase links? */}
                            <li>
                                <Link to='/howitworks' style={{ color: '#fff' }}>How It Works</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center' style={{ color: '#fff' }}>
                        <h5>Social</h5>
                        <a
                                                    className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                             <i className='fa fa-facebook'/>
                        </a>
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <a
                            style={{ color: '#fff' }}
                            role='button'
                            className='btn btn-link'
                            href='tel:+15555551234'
                        >
                            <i className='fa fa-phone' style={{ color: '#fff' }} /> (555)555-1515
                        </a>
                        <br />
                        <a
                            style={{ color: '#fff' }}
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' style={{ color: '#fff' }} /> epd@equipped.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;