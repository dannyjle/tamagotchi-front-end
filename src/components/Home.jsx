import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  const [pets, setPets] = useState([])
  const [newPet, setNewPet] = useState('')

  async function loadPets() {
    const response = await fetch('https://digimonapi.herokuapp.com/api/Pets/')

    if (response.status === 200) {
      const json = await response.json()
      setPets(json)
    }
  }

  useEffect(function () {
    loadPets()
  }, [])

  async function addMon(event) {
    event.preventDefault()

    const response = await axios.post(
      'https://digimonapi.herokuapp.com/api/Pets/',
      {
        name: newPet,
      }
    )
    if (response.status === 201) {
      loadPets()
      setNewPet('')
    }
  }

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
        <h2>Create A New Digimon:</h2>
        <form onSubmit={addMon}>
          <input
            type="text"
            placeholder=" New Digimon's Name"
            value={newPet}
            onChange={function resetInput(event) {
              setNewPet(event.target.value)
            }}
          ></input>
          <input className="submitButton" type="submit" value="Create"></input>
        </form>
      </div>
    </>
  )
}
