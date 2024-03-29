export const validateUserLoginForm = (values) => {
    const {username ,password} = values
      const errors = {}

      if(!username){
          errors.username = 'Required'
      }else if(username.length < 5){
          errors.username ='Must be atleast 5 characters'
      }else if(username.length >15){
          errors.username ='Must be 15 characters or less'
      }
       if(!password){
           errors.password ='Required'
       }else if(password.length < 8){
           errors.password ='Must be atleast 8 characters'
       } 
       return errors;
}