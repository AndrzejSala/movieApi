import { movie } from '../../db/knex'
import omdb from '../../services/omdb'
import uuid from 'uuid/v4'
import commonHelper from '../../helpers/common'

export function getMovies (req, res) {
  movie.findAll().then((data) => {
    console.log(data[0].uuid)
    res.send(data)
  })
}

export function postMovie (req, res) {
  if (!req.query.id) {
    console.error('#ERROR id param have to be provided')
  }
  omdb
    .get({
      id: req.query.id
    })
    .then(data => {
      if (data.response === 'False') {
        console.error('#ERROR Unable to find movie')
      }

      console.log('###', data.body)
      console.log(commonHelper.standarizeMovieObject(data.body))
      console.log('###')

      movie
        .create(uuid())
        .then(data => res.status(201).send('The movie has been added'))
        .catch(err => res.status(201).send(err))
    })
}
