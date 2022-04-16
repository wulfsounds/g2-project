const router = require('express').Router();
const { Category } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new category
router.post('/', withAuth, async (req, res) => {

  try {
    const newCategory = await Category.create({
      ...req.body,
      user_id: 4, // change this to req.session.user_id when login functionality is ready
    });

    res.status(200).json(newCategory);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

// DELETE existing category
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No catagory found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;