// Herbruikbare kaart: krijgt de gegevens binnen via props
function PokemonCard({ name, image, id }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={name} />
      </div>
      <div className="card-info">
        <p><strong>Naam:</strong> {name}</p>
        <p><strong>Nummer:</strong> {id}</p>
      </div>
    </div>
  )
}

export default PokemonCard
