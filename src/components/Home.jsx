import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  const [pets, setPets] = useState([])

  useEffect(function () {
    async function loadPets() {
      const response = await fetch('https://digimonapi.herokuapp.com/api/Pets/')

      if (response.status === 200) {
        const json = await response.json()
        setPets(json)
      }
    }

    loadPets()
  }, [])

  return (
    <>
      {pets.map(pet => (
        <div key={pet.id} className="pets">
          <h2>{pet.name}</h2>
          <p></p>
          <dl className="status">
            <dt className="statusTitle">Birthday:</dt>
            <dd className="birthday">{pet.birthday}</dd>
            <dt className="statusTitle">Hunger Level:</dt>
            <dd>{pet.hungerLevel}</dd>
            <dt className="statusTitle">Happiness Level:</dt>
            <dd>{pet.happinessLevel}</dd>
          </dl>
          <Link to={`/pets/${pet.id}`}>
            <button>Interact</button>
          </Link>
        </div>
      ))}

      <div className="create">
        <h2>Create New Digimon:</h2>
        <form>
          <h4>Name:</h4>
          <input type="text"></input>
          <button>Create</button>
        </form>
      </div>
    </>
  )
}
