const config = require('./../config')[process.env.NODE_ENV]['db']
const knex = require('knex')(config)

// Operations on a movie table
async function findAll () {
  let res
  try {
    res = await knex.select().from('movies')
  } catch (e) {
    res = e
  }
  return res
}

async function create (uuid) {
  const data = {
    uuid,
    title: uuid,
    year: '2000',
    rated: 'PG-13',
    released: '01 Aug 2014',
    runtime: '121 min',
    genre: 'Action, Adventure, Sci-Fi',
    director: 'James Gunn',
    writer: 'James Gunn, Nicole Perlman, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Bill Mantlo (character created by: Rocket Raccoon), Keith Giffen (character created by: Rocket Raccoon), Jim Starlin (characters created by: Drax the Destroyer,  Gamora & Thanos), Steve Englehart (character created by: Star-Lord), Steve Gan (character created by: Star-Lord), Steve Gerber (character created by: Howard the Duck), Val Mayerik (character created by: Howard the Duck)',
    actors: 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel',
    plot: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
    language: 'English',
    country: 'USA',
    awards: 'Nominated for 2 Oscars. Another 52 wins & 99 nominations.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg',
    ratings: [{
      "Source": "Internet Movie Database",
      "Value": "8.1/10"
    }, {
      "Source": "Rotten Tomatoes",
      "Value": "91%"
    }],
    metascore: '76',
    imdb_rating: '8.1',
    imdb_votes: '862,056',
    imdb_id: 'tt2015381',
    type: 'movie',
    dvd: '09 Dec 2014',
    box_office: '&pound;270,592,504',
    production: 'Walt Disney Pictures',
    website: 'http://marvel.com/guardians'
  }
  let res
  try {
    res = await knex('movies').insert(data)
  } catch (e) {
    res = e
  }
  return res
}

module.exports = {
  movie: {
    findAll,
    create
  }
}
