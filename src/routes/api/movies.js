import { Router } from 'express'
import {
  fetchMovies, fetchMovieById, createMovie, deleteMovie, updateMovie
} from '../../controllers'

const router = Router()

router.get('/', fetchMovies)
router.get('/:project_id', fetchMovieById)
router.post('/', createMovie)
router.put('/:project_id', updateMovie)
router.delete('/:project_id', deleteMovie)

export default router
