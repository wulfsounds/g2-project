const router = require('express').Router();
const { Category } = require('../../models');

// ADD new category
router.post('/', async (req, res) => {

  try {
    const newCategory = await Category.create({
      ...req.body,
    });

    res.status(200).json(newCategory);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
    
});

// DELETE existing category
router.delete('/:id', async (req, res) => {

  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
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