import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-page">
      <div className="dashboard-panel">
        <div className="dashboard-header">POKEMON - DASHBOARD</div>

        <div className="dashboard-row">
          <span>Naam:</span>
          <strong>Speler1</strong>
        </div>

        <div className="dashboard-row">
          <span>Level:</span>
          <strong>15</strong>
        </div>

        <div className="team-grid">
          <div className="team-slot">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" />
            <span>Pikachu</span>
            <small>Lvl 10</small>
          </div>
          <div className="team-slot">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="Charizard" />
            <span>Charizard</span>
            <small>Lvl 22</small>
          </div>
          <div className="team-slot">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="Bulbasaur" />
            <span>Bulbasaur</span>
            <small>Lvl 8</small>
          </div>
          <div className="team-slot empty">
            <span>Gevangen</span>
          </div>
        </div>
      </div>

      <Link to="/list" className="button home-button">Naar mijn team</Link>
    </div>
  )
}

export default Home
