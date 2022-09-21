const jwt = require();

function auth (req,res,next) {
  const token = req.header('auth-token');
  if(!token){res.status(400).send('Access Denei')}

  try {
    const veryfied = jwt.veryfied(token, process.env.TOKEN_SECRET);
    req.user = veryfied;

  } catch (error) {
    res.status(400).send('Invalid Token');
  }
}