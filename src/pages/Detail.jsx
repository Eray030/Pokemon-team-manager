import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  // id uit de url halen, bv. /detail/25 geeft id = 25
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
      .catch(error => console.error('Error:', error))
  }, [id])

  // zolang de data er nog niet is
  if (!pokemon) {
    return <p>Pokémon detail komt hier...</p>
  }

  return (
    <div>
      <h2 className="title">Detail</h2>

      <div className="card card-big">
        <div className="card-img">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="card-info">
          <p><strong>Naam:</strong> {pokemon.name}</p>
          <p><strong>HP:</strong> {pokemon.stats[0].base_stat}</p>
          <p><strong>Type:</strong> {pokemon.types[0].type.name}</p>
          <p><strong>Gewicht:</strong> {pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}

export default Detail
