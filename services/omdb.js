const got = require('got')
const OMDB_ENDPOINT = 'http://www.omdbapi.com/'

export function get (query) {
  return got(OMDB_ENDPOINT, {
    query: {
      apikey: '15b58cfc',
      r: 'json',
      v: 1,
      i: query.id
    }
  })
}

module.exports = {
  get
}
