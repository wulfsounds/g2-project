const router = require('express').Router();
const { Task } = require('../../models');

// CREATE new task
router.post('/', async (req, res) => {

  try {
    const newTask = await Task.create({
      task: req.body.task,
      user_id: req.body.user_id,
      list_id: req.body.list_id
    });

    res.status(200).json(newTask);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});


module.exports = router;