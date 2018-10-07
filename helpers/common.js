import _ from 'lodash'
import uuid from 'uuid/v4'

function standarizeMovieObject (movie) {
  console.log('###1', movie)
  console.log('###2', Object.keys(movie))
  // let standarizedMovie = {}
  // Object.keys(movie).map(key => {
  //   const newKey = _.camelCase(key)
  //   standarizedMovie[newKey] = movie[key]
  // })
  // delete standarizedMovie['response']
  // standarizedMovie['uuid'] = uuid();

  return ''
}

module.exports = {
  standarizeMovieObject
}
