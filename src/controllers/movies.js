import { Movie } from '../models'

// Fetch All
export async function fetchMovies (req, res) {
  const result = await Movie.fetchAll()
  res.json({ result })
}

// Fetch By Id
export async function fetchMovieById (req, res) {
  const { project_id } = req.params
  try {
    const result = await _fetchById(project_id)
    res.json({ result })
  } catch (e) {
    res.json({ error: e.message })
  }
}

// Create
export async function createMovie (req, res) {
  const data = req.body
  try {
    const result = await _create(data)
    res.json({ result })
  } catch (e) {
    console.log(e)
    res.json({
      error: ':)'
    })
  }
}

export async function deleteMovie (req, res) {
  const { project_id } = req.params
  console.log(project_id)
  try {
    const targetMovie = await _fetchById(project_id)
    const result = await targetMovie.destroy()
    res.json({ result })
  } catch (e) {
    res.json({ error: e.message })
  }
}

export async function updateMovie (req, res) {
  const { project_id } = req.params
  const data = req.body
  try {
    const targetMovie = await _fetchById(project_id)
    const result = await targetMovie.save(data, {
      method: 'update',
      patch: true
    })
    res.json({ result })
  } catch (e) {
    console.log(e)
    res.json({ error: e.message })
  }
}

// Private
const _fetchById = async (id) => {
  const result = await Movie.where({ id }).fetch()
  if (result === null) {
    throw new Error(`Movie id ${id} has not found`)
  }
  return result
}

const _create = async (data) => {
  const result = await Movie.forge(data).save()
  return result
}
