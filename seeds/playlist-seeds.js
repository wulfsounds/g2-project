const { Playlist } = require('../models');

const playlistData = [
  {
    playlist_name: 'Italian Dinner Playlist',
    playlist_link: 'https://open.spotify.com/playlist/0EpxQXFSAs8cVTfXo3m33H?si=58ed0041e024458e',
    category_id: 1,
  },
  {
    playlist_name: 'Mexican Dinner Playlist',
    playlist_link: 'https://open.spotify.com/playlist/37i9dQZF1E4BFgm4Gw9fnY?si=b09c16e0771343a3',
    category_id: 2,
  },
  {
    playlist_name: 'French Dinner Playlist',
    playlist_link: 'https://open.spotify.com/playlist/37i9dQZF1DX8XxBtyUnC7B?si=25651975daf149b0',
    category_id: 3,
  },
  {
    playlist_name: 'Cajun Dinner Playlist',
    playlist_link: 'https://open.spotify.com/playlist/79cVP4LJGQqk2nwzUArsKe?si=fdb101c341cd48a6',
    category_id: 4,
  },
  {
    playlist_name: 'Indian Dinner Playlist',
    playlist_link: 'https://open.spotify.com/playlist/37i9dQZF1DWSxaFwRXIXnt?si=ccbd07f05def40a7',
    category_id: 5,
  },
  {
    playlist_name: 'Thai Dinner Playlist',
    playlist_link: 'https://open.spotify.com/playlist/5LhWIdppYbSq08V4aK7Hjd?si=ed7c56dc79074c46',
    category_id: 6,
  },
  {
    playlist_name: 'Brunch Playlist',
    playlist_link: 'https://open.spotify.com/playlist/37i9dQZF1DX4fpCWaHOned?si=0286fad6279148ac',
    category_id: 7,
  },
];

const seedPlaylist = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylist;