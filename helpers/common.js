import _ from 'lodash'

function standarizeMovieObject (movie) {
  const parsedMovie = JSON.parse(movie)
  let standarizedMovie = {}
  Object.keys(parsedMovie).map(key => {
    if (key !== 'Response') {
      const newKey = _.snakeCase(key)
      standarizedMovie[newKey] = parsedMovie[key]
    }
  })
  return standarizedMovie
}

module.exports = {
  standarizeMovieObject
}
