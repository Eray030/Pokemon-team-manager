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
    <div>
      <h2 className="title">Mijn team</h2>

      {loading && <p className="text">Pokémon worden geladen...</p>}
      {error && <p className="text">{error}</p>}

      {!loading && !error && (
        <div className="list">
          {pokemons.map((p, index) => {
            const id = index + 1
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

            return (
              <Link key={p.name} to={`/detail/${id}`}>
                <PokemonCard name={p.name} image={image} id={id} />
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default List
