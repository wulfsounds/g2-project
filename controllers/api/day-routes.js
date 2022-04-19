const router = require('express').Router();
const { Day, Task, User } = require('../../models');

// ADD task to day view list
router.post('/:id', async (req, res) => {

  try {
    const newTask = await Task.create({
      task: req.body.task,
      user_id: req.session.user_id, 
      list_id: req.params.id
    });

    res.status(200).json(newTask);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

// UPDATE task in day view list
// router.put('/:id/:taskId', async (req, res) => {
//   try {
//       const updatedTask = await Task.update({
//         task: req.body.task,
//       },
//       {
//         where: {
//           id: req.params.taskId
//         }
//       });
    
//       res.json(updatedTask);
//       } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//       }
  
// });

// DELETE task in day view list
router.delete('/:id/:taskId', async (req, res) => {

  try {
      const deletedTask = await Task.destroy({
          where: {
              id: req.params.taskId,
          },
      });    

    if (!deletedTask) {
      res.status(404).json({ message: 'No such task found!' });
      return;
    }

    res.status(200).json(deletedTask);
    
  } catch (err) {
    res.status(500).json(err);
  }
    
});

module.exports = router;