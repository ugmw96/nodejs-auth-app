const yup = require('yup');

//Yup validation Schema




const validation = (data) => {
  const schema = yup.object({
    body: yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email id required'),
    password: yup.string().required('password id required').min(6)
      })
  });
  return yup.validate(she)
}