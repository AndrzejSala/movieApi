import { getMovies, postMovie } from './controllers/movies'

export function initRoutes (app) {
  app.route('/movies')
    .get((req, res) => getMovies(req, res))
    .post((req, res) => postMovie(req, res))
}
