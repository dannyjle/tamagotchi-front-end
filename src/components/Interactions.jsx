import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Home } from './Home'

export function Interactions() {
  const [pets, setPets] = useState([])

  useEffect(function () {
    async function loadPets() {
      const response = await fetch('https://digimonapi.herokuapp.com/api/Pets')

      if (response.status === 200) {
        const json = await response.json()
        setPets(json)
      }
    }

    loadPets()
  }, [])

  return (
    <>
      <Link to="/">
        <button className="homeButton">Home</button>
      </Link>
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
            <div className="buttonGroup">
              <button>♥️ Play</button>
              <button>🍙 Feed</button>
              <button>☝🏼 Scold</button>
            </div>
          </dl>
        </div>
      ))}
    </>
  )
}
