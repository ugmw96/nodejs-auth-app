const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/',(req,res,next) => {
      res.json({
          posts: {
            title: "Gayan Madhusanka",
            description: " hi im in to your room"
          }
      })
})

module.exports = router;