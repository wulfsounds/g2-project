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

router.delete('/:id', async (req, res) => {

  try {
    const deletedTask = await Task.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedTask) {
      res.status(404).json({ message: 'No task found with this id!' });
      return;
    }

    res.status(200).json(deletedTask);

  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;