import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

export function Interactions() {
  const [info, setInfo] = useState({
    id: '',
    name: '',
    birthday: '',
    hungerLevel: '',
    happinessLevel: '',
  })

  const params = useParams()
  const history = useHistory()

  async function loadPetInfo() {
    const response = await fetch(
      `https://digimonapi.herokuapp.com/api/Pets/${params.id}`
    )

    if (response.status === 200) {
      const json = await response.json()
      setInfo(json)
    }
  }

  useEffect(function () {
    loadPetInfo()
  }, [])

  async function petPlay() {
    const response = await axios.post(
      `https://digimonapi.herokuapp.com/api/Pets/${info.id}/Playtimes`,
      {}
    )
    if (response.status === 200) {
      loadPetInfo()
    }
  }

  async function petFeed() {
    const response = await axios.post(
      `https://digimonapi.herokuapp.com/api/Pets/${info.id}/Feedings`,
      {}
    )

    if (response.status === 200) {
      loadPetInfo()
    }
  }

  async function petScold() {
    const response = await axios.post(
      `https://digimonapi.herokuapp.com/api/Pets/${info.id}/Scoldings`,
      {}
    )
    if (response.status === 200) {
      loadPetInfo()
    }
  }

  async function petRelease() {
    const response = await axios.delete(
      `https://digimonapi.herokuapp.com/api/Pets/${info.id}/`
    )
    if (response.status === 200) {
      history.push('/')
    }
  }

  return (
    <>
      <Link to="/">
        <button className="homeButton">Home</button>
      </Link>
      <div key={info.id} className="pets">
        <h2>{info.name}</h2>
        <p></p>
        <dl className="status">
          <dt className="statusTitle">Birthday:</dt>
          <dd className="birthday">{info.birthday}</dd>
          <dt className="statusTitle">Hunger Level:</dt>
          <dd>{info.hungerLevel}</dd>
          <dt className="statusTitle">Happiness Level:</dt>
          <dd>{info.happinessLevel}</dd>
          <div className="buttonGroup">
            <button onClick={petPlay}>♥️ Play</button>
            <button onClick={petFeed}>🍙 Feed</button>
            <button onClick={petScold}>☝🏼 Scold</button>
            <button onClick={petRelease}>🗑 Delete</button>
          </div>
        </dl>
      </div>
    </>
  )
}
