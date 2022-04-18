const router = require('express').Router();
const { User, Category, Recipe, Wine, Playlist } = require('../../models');

// GET culinary experience
router.get('/culexp/:id', async (req, res) => {
    try {
        const newCulExp = await Category.findByPk(req.params.id, {
          include: [ 
            { model: Recipe,
              attributes: [
                'id',
                'recipe_name',
                'recipe_link',
              ]}, 
            { model: Wine,
              attributes: [
                'id',
                'wine_name',
              ]}, 
            { model: Playlist, 
              attributes: [
                'id',
                'playlist_name',
                'playlist_link',
              ]}  
          ],
        });
        const culExp = newCulExp.get({ plain: true });

        res.json(culExp);
        // Below syntax from 12-Stu_Partials
        //res.render('culexp', {culExp});
        
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      
});


module.exports = router;