const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req,res) => {

//checking existing email
  const validExisting = await User.findOne({email: req.body.email});

  if(validExisting){
    return res.status(400).send('Existing Email address');
  }

//Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password , salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });


try{
  const saveUser = await user.save();
  res.send({user: user._id });

} catch (err) {
  res.status(400).send(err);
}

})

//Login
  router.post('/login',async (req,res) => {
    
    const chckedEmail = await User.findOne({email: req.body.email});
    if(!chckedEmail){
      return res.send('Invalid Email').status(400);
    }

    const validPass = await bcrypt.compare(req.body.password, chckedEmail.password);
      if(!validPass) {
        return res.send('Invalid Password').status(400);
      }

    //create jwt token
    const token = jwt.sign({_id: chckedEmail._id}, process.env.TOKEN_SECRET);
    res.header('auth-token',token).send(token);

      // res.send('login in')
  })

module.exports = router;