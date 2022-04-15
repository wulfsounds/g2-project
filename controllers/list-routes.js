const router = require('express').Router();
const { User, List, Task } = require('../models');

// get edit list page
router.get('/:id', async (req, res) => {

    try {
        const singleList = await List.findByPk(req.params.id, {
          include: [ { model: Task } ],
        });
        const list = singleList.get({ plain: true });

        res.render('editlist', { list, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      
});


module.exports = router;