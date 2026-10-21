import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2 className="title">Welkom trainer!</h2>

      <div className="card card-big">
        <div className="card-img">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Pikachu"
          />
        </div>
        <div className="card-info">
          <p><strong>Naam:</strong> Speler1</p>
          <p><strong>Level:</strong> 15</p>
        </div>
      </div>

      <p className="text">
        In deze app beheer je jouw Pokémon team. Ga naar Team om al je Pokémon
        te bekijken en klik op een Pokémon voor de details.
      </p>

      <Link to="/list" className="button">Naar mijn team</Link>
    </div>
  )
}

export default Home
