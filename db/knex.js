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

async function create (data) {
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
