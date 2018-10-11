import { getMovies, postMovie } from './controllers/movies'

export function initRoutes (app) {
  app.route('/movies')
    .get((req, res, next) => getMovies(req, res, next))
    .post((req, res, next) => postMovie(req, res, next))
}
