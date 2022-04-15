const { Playlist } = require('../models');

const playlistData = [
  {
    playlist_name: 'Italian Dinner Playlist',
    playlist_link: 'linked text',
    category_id: 1,
  },
  {
    playlist_name: 'Mexican Dinner Playlist',
    playlist_link: 'linked text',
    category_id: 2,
  },
  {
    playlist_name: 'French Dinner Playlist',
    playlist_link: 'linked text',
    category_id: 3,
  },
  {
    playlist_name: 'Cajun Dinner Playlist',
    playlist_link: 'linked text',
    category_id: 4,
  },
  {
    playlist_name: 'Indian Dinner Playlist',
    playlist_link: 'linked text',
    category_id: 5,
  },
  {
    playlist_name: 'Thai Dinner Playlist',
    playlist_link: 'linked text',
    category_id: 6,
  },
  {
    playlist_name: 'Brunch Playlist',
    playlist_link: 'linked text',
    category_id: 7,
  },
];

const seedPlaylist = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylist;