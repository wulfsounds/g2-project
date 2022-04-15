const router = require('express').Router();
const { User, List, Task } = require('../models');

router.get('/', async (req, res) => {

    try {
      const userData = await User.findByPk(6, {
        attributes: { exclude: ['password'] },
        include: [
          { model: List,
            where: {
              list_date: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            include: [ {model: Task} ]
          }
        ],
      });
    
      const user = userData.get({ plain: true });
      console.log(user);

      res.render('homepage', {
        ...user,
        loggedIn: req.session.loggedIn,
      });

      
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
  
});



module.exports = router;