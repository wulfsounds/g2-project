const router = require('express').Router();
const { Playlist } = require('../../models');

// ADD new playlist
router.post('/', async (req, res) => {

  try {
    const newPlaylist = await Playlist.create({
      ...req.body,
    });

    res.status(200).json(newPlaylist);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
    
});

// DELETE existing playlist
router.delete('/:id', async (req, res) => {

  try {
    const playlistData = await Playlist.destroy({
      where: {
        id: req.params.id,
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