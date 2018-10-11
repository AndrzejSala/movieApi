import { movie } from '../../db/knex'
import omdb from '../../services/omdb'
import commonHelper from '../../helpers/common'
import NotFound from '../../errors/notFound'
import _ from 'lodash'

export function getMovies (req, res, next) {
  movie.findAll().then((data) => {
    console.log(data[0].uuid)
    res.send(data)
  })
}

export function postMovie (req, res, next) {
  const id = _.get(req, 'query.id', null)
  if (!id) {
    console.error('#ERROR id param have to be provided')
  }
  omdb
    .get({
      id
    })
    .then(data => {
      if (JSON.parse(data.body)['Error']) {
        console.log('###3')
        return next(new NotFound(`Unable to find movie with id: ${id}`))
      }

      movie
        .create(commonHelper.standarizeMovieObject(data.body))
        .then(data => res.status(201).send('The movie has been added'))
        .catch(err => res.status(201).send(err))
    })
}
