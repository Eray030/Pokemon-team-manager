import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PokemonCard from '../components/PokemonCard.jsx'

function List() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(res => {
        if (!res.ok) {
          throw new Error('Kon Pokémon-data niet ophalen')
        }

        return res.json()
      })
      .then(data => setPokemons(data.results))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="dashboard-panel list-panel">
      <div className="dashboard-header">Team</div>

      {loading && <p className="text">Pokémon worden geladen...</p>}
      {error && <p className="text">{error}</p>}

      {!loading && !error && (
        <div className="team-grid">
          {pokemons.map((p, index) => {
            const id = index + 1
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

            return (
              <Link key={p.name} to={`/detail/${id}`} className="team-slot team-link">
                <img src={image} alt={p.name} />
                <span>{p.name}</span>
                <small>Lvl {id * 2 + 5}</small>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default List
