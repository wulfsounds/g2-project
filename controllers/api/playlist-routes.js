const router = require('express').Router();
const { Playlist } = require('../../models');
const withAuth = require('../../utils/auth');


// CREATE new playlist
router.post('/', withAuth, async (req, res) => {

  try {
    const newPlaylist = await Playlist.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPlaylist);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

// DELETE existing playlist
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const playlistData = await Playlist.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!playlistData) {
      res.status(404).json({ message: 'No playlist found with this id!' });
      return;
    }

    res.status(200).json(playlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;