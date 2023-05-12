export const validateProductForm = (values) => {
  const errors = {};
  if (!values.postingTitle) {
    errors.postingTitle = "Required";
  }
  if (!values.selectCategories || !values.selectCategories.length) {
    errors.selectCategories = "Required";
  }
  if (!values.desc) {
    errors.desc = "Required";
  }
  if (!values.inputAddress) {
    errors.inputAddress = "Required";
  }
  if (!values.inputCity) {
    errors.inputCity = "Required";
  }
  if (!values.inputState) {
    errors.inputState = "Required";
  }
  if (!values.inputZip) {
    errors.inputZip = "Required";
  }
  if (!values.pricingSwitches.length) {
    errors.pricingSwitches = "Product must be enabled for either rent or purchase";
  }
  // if (!values.productPhotos || !values.productPhotos.length) {
  //   errors.productPhotos = "Required";
  // }
  return errors
}