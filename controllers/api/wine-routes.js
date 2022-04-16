const router = require('express').Router();
const { Wine } = require('../../models');
const withAuth = require('../../utils/auth');


// CREATE new wine
router.post('/', withAuth, async (req, res) => {

  try {
    const newWine = await Wine.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWine);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

// DELETE existing wine
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const wineData = await Wine.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!wineData) {
      res.status(404).json({ message: 'No wine found with this id!' });
      return;
    }

    res.status(200).json(wineData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;