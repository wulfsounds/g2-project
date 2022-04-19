const router = require('express').Router();
const { Recipe } = require('../../models');

// ADD new recipe 
router.post('/', async (req, res) => {

  try {
    const newRecipe = await Recipe.create({
      ...req.body,
    });

    res.status(200).json(newRecipe);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
    
});

// DELETE existing recipe
router.delete('/:id', async (req, res) => {

  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' });
      return;
    }

    res.status(200).json(recipeData);
    
  } catch (err) {
    res.status(500).json(err);
  }
    
});

module.exports = router;