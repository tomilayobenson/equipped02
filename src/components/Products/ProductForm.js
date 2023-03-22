import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Button, Col, Label, FormGroup, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { validateProductForm } from '../utils/validateProductForm';
import { useDispatch } from 'react-redux';
import { postProduct, selectAllProducts } from './productsSlice';
import { useSelector } from 'react-redux';

export const ProductForm = () => {
    const allProds = useSelector(selectAllProducts)
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        // console.log('in JSON format:', JSON.stringify(values));
        const product = {
            ...values
        }
        console.log(product);
        dispatch(postProduct(product));
        resetForm();
    };
    const [activeTab, setActiveTab] = useState("1");
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <Container className="my-5">
            <h3 className="text-center display-4">Post an Item</h3>
            <Formik
                initialValues={{
                    postingTitle: '',
                    selectCategory: 'Select an option',
                    desc: '',
                    inputAddress: '',
                    inputAddress2: '',
                    inputCity: '',
                    inputState: 'Choose...',
                    inputZip: '',
                    pricingSwitches: ['For Rent'],
                    enterDay: '',
                    enterWeek: '',
                    enterMonth: '',
                    enterQuantity: '',
                    enterValue: '',
                    enterMin: '',
                    itemPrice: '',
                    itemQuantity: '',
                    productPhotos: null
                }}
                onSubmit={handleSubmit}
                validate={validateProductForm}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <FormGroup>
                            <Label htmlFor="postingTitle">Posting Title</Label>
                            <Field name="postingTitle" className="form-control" id="postingTitle" aria-describedby="emailHelp" />
                            <ErrorMessage name='postingTitle'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="selectCategory">Category</Label>
                            <Field name="selectCategory" as="select" className="form-control" id="selectCategory">
                                <option>Select an option</option>
                                <option>Household</option>
                                <option>Baby</option>
                                <option>Musical</option>
                                <option>Clothing</option>
                                <option>5Travel</option>
                            </Field>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="desc">Description</Label>
                            <Field as="textarea" className="form-control" id="desc" name="desc" rows="5" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="inputAddress">Address</Label>
                            <Field name="inputAddress" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="inputAddress2">Address 2</Label>
                            <Field name="inputAddress2" type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </FormGroup>
                        <FormGroup row>
                            <Col md={6}>
                                <Label htmlFor="inputCity">City</Label>
                                <Field name="inputCity" type="text" className="form-control" id="inputCity" />
                            </Col>
                            <Col md={4}>
                                <Label htmlFor="inputState">State</Label>
                                <Field as="select" name="inputState" id="inputState" className="form-control">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Field>
                            </Col>
                            <Col md={2}>
                                <Label htmlFor="inputZip">Zip</Label>
                                <Field name="inputZip" type="text" className="form-control" id="inputZip" />
                            </Col>
                        </FormGroup>
                        <Nav tabs id="myTab" role="tablist">
                            <NavItem role="presentation">
                                <NavLink className={activeTab === "1" ? "font-weight-bold active" : "font-weight-bold"} onClick={() => { toggle("1"); }} role="tab" aria-controls="rent">Rental Pricing</NavLink>
                            </NavItem>
                            <NavItem role="presentation">
                                <NavLink className={activeTab === "2" ? "font-weight-bold active" : "font-weight-bold"} onClick={() => { toggle("2"); }} role="tab" aria-controls="buy">Purchase Pricing</NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent className="border border-top-0 p-4" id="myTabContent" activeTab={activeTab}>
                            <TabPane className="fade show" role="tabpanel" tabId="1">
                                <Label className="custom-control custom-switch pb-4">
                                    <Field type="checkbox" className="custom-control-input" name="pricingSwitches" value="For Rent" />
                                    Enable item for rental
                                </Label>
                                <div id="rentalPriceSection" className={values.pricingSwitches.includes("For Rent") ? "d-block" : "d-none"}>
                                    <p className="font-weight-bold">Rental Price ($) Per:</p>
                                    <FormGroup className="pb-4" row>
                                        <Col md={4}>
                                            <Label htmlFor="enterDay">Day</Label>
                                            <Field name="enterDay" className="form-control" id="enterDay" placeholder="Enter price per day" />
                                        </Col>
                                        <Col md={4}>
                                            <Label htmlFor="enterWeek">Week</Label>
                                            <Field name="enterWeek" className="form-control" id="enterWeek" placeholder="Enter price per week" />
                                        </Col>
                                        <Col md={4}>
                                            <Label htmlFor="enterMonth">Month</Label>
                                            <Field name="enterMonth" className="form-control" id="enterMonth" placeholder="Enter price per month" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={4}>
                                            <Label htmlFor="enterValue">Item Value ($)</Label>
                                            <Field name="enterValue" className="form-control" id="enterValue" />
                                        </Col>
                                        <Col md={4}>
                                            <Label htmlFor="enterQuantity">Quantity</Label>
                                            <Field name="enterQuantity" className="form-control" id="enterQuantity" />
                                        </Col>
                                        <Col md={4}>
                                            <Label htmlFor="enterMin">Minimum Rental Days</Label>
                                            <Field name="enterMin" className="form-control" id="enterMin" />
                                        </Col>
                                    </FormGroup>
                                </div>
                            </TabPane>
                            <TabPane className="fade show" role="tabpanel" tabId="2">
                                <Label className="custom-control custom-switch pb-4">
                                    <Field type="checkbox" className="custom-control-input" name="pricingSwitches" value="For Buy" />
                                    Enable item for purchase
                                </Label>
                                <div id="buyPriceSection" className={values.pricingSwitches.includes("For Buy") ? "d-block" : "d-none"}>
                                    <FormGroup row>
                                        <Col md={6}>
                                            <Label htmlFor="itemPrice">Item One-time Purchase Price($)</Label>
                                            <Field name="itemPrice" className="form-control" id="itemPrice" />
                                        </Col>
                                        <Col md={6}>
                                            <Label htmlFor="itemQuantity">Quantity</Label>
                                            <Field name="itemQuantity" className="form-control" id="itemQuantity" />
                                        </Col>
                                    </FormGroup>
                                </div>
                            </TabPane>
                        </TabContent>
                        {/* <div className="form-group mt-3">
                    <label for="attachPhotos">Upload Item Photos</label>
                    <input type="file" className="form-control-file" id="attachPhotos" multiple>
                </div> */}
                        <FormGroup>
                            <label for="productPhotos">Address 2</label>
                            <input
                                name="productPhotos"
                                type="file"
                                className="form-control"
                                id="productPhotos"
                                onChange={(e) => {
                                    const files = e.target.files;
                                    let myFiles = Array.from(files);
                                    setFieldValue("productPhotos", myFiles)
                                }}
                                multiple
                            />
                            {values.productPhotos && (<div>
                                {
                                    values.productPhotos.map((photo,idx) => (
                                        <img src={URL.createObjectURL(photo)}
                                            alt={photo.name}
                                            className="img-thumbnail mt-2"
                                            height={200}
                                            width={200} 
                                            key={idx}
                                            />
                                    ))
                                }
                            </div>)}
                        </FormGroup>
                        <FormGroup className="my-5">
                            <Button type="submit" className="btn-grad btn-lg text-white rounded-pill px-5 py-3 ">Submit</Button>
                        </FormGroup>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}
