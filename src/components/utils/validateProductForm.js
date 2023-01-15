export const validateProductForm = (values) => {
    const errors={};
    if (!values.postingTitle) {
        errors.postingTitle="Required";
    }
  return errors 
}
