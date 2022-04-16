const router = require('express').Router();
const { User, Category, Recipe, Wine, Playlist } = require('../../models');

// get edit list page
router.get('/:id', async (req, res) => {

    try {
        const newCulExp = await Category.findByPk(req.params.id, {
          include: [ { model: Recipe}, { model: Wine}, { model: Playlist}  ],
        });
        const culExp = newCulExp.get({ plain: true });

        res.json(culExp);
        
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      
});


module.exports = router;