import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import FacebookLogin from 'react-facebook-login';
// import { setCurrentUser, selectCurrentUser } from './userSlice';
import { userLogin, userSignup, userLogout } from './userSlice';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button,
    Col
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateUserLoginForm } from '../utils/validateUserLoginForm';
import { validateUserSignupForm } from '../utils/validateUserSignupForm';
import UserAvatar from './UserAvatar';


const UserLoginForm = () => {

    const [loginModalOpen, setLoginModalOpen] = useState(false)
    const [signupModalOpen, setSignupModalOpen] = useState(false)
    // const [currentUser, setCurrentUser] = useState(false)
    const currentUser = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     window.fbAsyncInit = function () {
    //         window.FB.init({
    //             appId: '780189826857122',
    //             cookie: true,
    //             xfbml: true,
    //             version: 'v13.0'
    //         });
    //     };

    //     // Load the Facebook SDK asynchronously
    //     (function (d, s, id) {
    //         var js, fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) return;
    //         js = d.createElement(s); js.id = id;
    //         js.src = "https://connect.facebook.net/en_US/sdk.js";
    //         fjs.parentNode.insertBefore(js, fjs);
    //     }(document, 'script', 'facebook-jssdk'));
    // }, []);

    // const handleFacebookResponse = (response) => {
    //     if (response.authResponse) {
    //         // User has successfully authenticated with Facebook
    //         // Redirect to the server's /auth/facebook route to handle authentication
    //         window.location.href = '/users/auth/facebook';
    //     } else {
    //         console.log('User cancelled login or did not fully authorize.');
    //     }
    // }

    const handleLogin = (values) => {
        const user = {
            username: values.username,
            password: values.password
        }
        // console.log(JSON.stringify(user))
        dispatch(userLogin(user))
        setLoginModalOpen(false)
    }

    const handleSignup = (values) => {
        // console.log('i have been fired"')
        const user = {
            username: values.username,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            address: values.address,
            address2: values.address2,
            city: values.city,
            state: values.state,
            zip: values.zip
        }
        // console.log(JSON.stringify(user))
        dispatch(userSignup(user))
        setSignupModalOpen(false)
    }

    return (
        <>
            <span className='navbar-text ml-auto'>
                {currentUser ? (
                    <>
                        <span className='navbar-text ml-auto'>
                            <Button
                                outline
                                onClick={() => dispatch(userLogout())}
                                style={{
                                    color: 'white',
                                    border: '1px solid white',
                                    margin: '5px'
                                }}
                            >
                                <i className='fa fa-sign-out fa-lg' /> Logout
                            </Button>
                        </span>
                        <span className='ml-auto'><UserAvatar /></span>
                    </>
                ) : (
                    <Button
                        outline
                        onClick={() => setLoginModalOpen(true)}
                        style={{ color: 'white', border: '1px solid white' }}
                    >
                        <i className='fa fa-sign-in fa-lg' /> Login / Signup
                    </Button>
                )}

                <Modal isOpen={loginModalOpen}>
                    <ModalHeader toggle={() => setLoginModalOpen(false)}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        {/* <FacebookLogin
                            appId="780189826857122"
                            fields="name,email,picture,id,displayName,gender"
                            callback={handleFacebookResponse}
                            cssClass="my-facebook-button-class"
                            icon="fa-facebook"
                        />
                        <h3>OR</h3> */}
                        <Formik

                            initialValues={{
                                username: '',
                                password: ''

                            }}

                            onSubmit={handleLogin}
                            validate={validateUserLoginForm}

                        >
                            <Form>
                                <FormGroup>
                                    <Label htmlFor='username'>
                                        Username
                                    </Label>
                                    <Field id='username' name='username' placeholder='Username' className='form-control' />
                                    <ErrorMessage name='username' >
                                        {(msg) => <p className='text-danger'> {msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor='password'>
                                        password
                                    </Label>
                                    <Field id='password' name='password' placeholder='Password' className='form-control' />
                                    <ErrorMessage name='password' >
                                        {(msg) => <p className='text-danger'> {msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <div className="text-center">
                                    <Button type='submit' color='primary' > Login</Button>
                                </div>
                            </Form>

                        </Formik>
                        <div className="text-center">
                            If you do not have an account, <Button color="link" onClick={() => {
                                setLoginModalOpen(false)
                                setSignupModalOpen(true)
                            }}
                            >
                                signup
                            </Button>
                        </div>
                    </ModalBody>
                </Modal>


                <Modal isOpen={signupModalOpen}>
                    <ModalHeader toggle={() => setSignupModalOpen(false)}>
                        Signup
                    </ModalHeader>
                    <ModalBody>
                        <Formik
                            initialValues={{
                                username: '',
                                password: '',
                                firstName: '',
                                lastName: '',
                                email: '',
                                address: '',
                                address2: '',
                                city: '',
                                state: '',
                                zip: ''
                            }}
                            onSubmit={handleSignup}
                            validate={validateUserSignupForm}

                        >
                            <Form>
                                <FormGroup row>
                                    <Col md={6}>
                                        <Label htmlFor='username'>Username</Label>
                                        <Field id='username' name='username' placeholder='Username' className='form-control' />
                                        <ErrorMessage name='username' >
                                            {(msg) => <p className='text-danger'> {msg}</p>}
                                        </ErrorMessage>
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor='password'>Password</Label>
                                        <Field id='password' name='password' placeholder='Password' className='form-control' />
                                        <ErrorMessage name='password' >
                                            {(msg) => <p className='text-danger'> {msg}</p>}
                                        </ErrorMessage>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={6}>
                                        <Label htmlFor='firstName'>First Name</Label>
                                        <Field id='firstName' name='firstName' placeholder='First Name' className='form-control' />
                                        <ErrorMessage name='firstName' >
                                            {(msg) => <p className='text-danger'> {msg}</p>}
                                        </ErrorMessage>
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor='lastName'>Last Name</Label>
                                        <Field id='lastName' name='lastName' placeholder='Last Name' className='form-control' />
                                        <ErrorMessage name='lastName' >
                                            {(msg) => <p className='text-danger'> {msg}</p>}
                                        </ErrorMessage>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Field name="email" type="email" className="form-control" id="email" placeholder="1234 Main St" />
                                    <ErrorMessage name='email'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="address">Address</Label>
                                    <Field name="address" className="form-control" id="address" placeholder="1234 Main St" />
                                    <ErrorMessage name='address'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={6}>
                                        <Label htmlFor="address2">Address 2</Label>
                                        <Field name="address2" type="text" className="form-control" id="address2" placeholder="Apartment, studio, or floor" />
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor="city">City</Label>
                                        <Field name="city" type="text" className="form-control" id="city" />
                                        <ErrorMessage name='city'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={6}>
                                        <Label htmlFor="state">State</Label>
                                        <Field type="text" name="state" id="state" className="form-control" />
                                        <ErrorMessage name='state'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor="zip">Zip</Label>
                                        <Field name="zip" type="text" className="form-control" id="zip" />
                                        <ErrorMessage name='zip'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </Col>
                                </FormGroup>
                                <div className="text-center">
                                    <Button type='submit' color='primary'>Signup</Button>
                                </div>

                            </Form>

                        </Formik>
                        <div className="text-center">
                            If you already have an account, <Button color="link" onClick={() => {
                                setSignupModalOpen(false)
                                setLoginModalOpen(true)
                            }}
                            >
                                signin
                            </Button>
                        </div>
                    </ModalBody>
                </Modal>
            </span>
        </>

    )
}

export default UserLoginForm;
