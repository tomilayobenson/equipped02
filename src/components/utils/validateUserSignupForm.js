export const validateUserSignupForm = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length < 6) {
        errors.username = 'Must be atleast 6 characters'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Must be atleast 8 characters'
    }
    if (!values.firstName) {
        errors.firstName = "Required";
    }
    if (!values.lastName) {
        errors.lastName = "Required";
    }
    if (!values.email) {
        errors.email = "Required";
    }
    if (!values.address) {
        errors.address = "Required";
    }
    if (!values.address2) {
        errors.address2 = "Required";
    }
    if (!values.city) {
        errors.city = "Required";
    }
    if (!values.state) {
        errors.state = "Required";
    }
    if (!values.zip) {
        errors.zip = "Required";
    } 
    return errors
}