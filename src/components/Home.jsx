import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <div className="pets">
        <h2 className="petName">Gatomon</h2>
        <p></p>
        <dl className="status">
          <dt className="statusTitle">Birthday:</dt>
          <dd>-</dd>
          <dt className="statusTitle">Hunger Level:</dt>
          <dd>-</dd>
          <dt className="statusTitle">Happiness Level:</dt>
          <dd>-</dd>
        </dl>
        <button>Interact</button>
      </div>
      <div className="pets">
        <h2 className="petName">Patamon</h2>
        <p></p>
        <dl className="status">
          <dt>Birthday:</dt>
          <dd>DATE HERE</dd>
          <dt>Hunger Level:</dt>
          <dd>HUNGER HERE</dd>
          <dt>Happiness Level:</dt>
          <dd>HAPPINESS HERE</dd>
        </dl>
      </div>
      <div className="pets">
        <h2 className="petName">Lopmon</h2>
        <p></p>
        <dl className="status">
          <dt>Birthday:</dt>
          <dd>DATE HERE</dd>
          <dt>Hunger Level:</dt>
          <dd>HUNGER HERE</dd>
          <dt>Happiness Level:</dt>
          <dd>HAPPINESS HERE</dd>
        </dl>
      </div>
    </>
  )
}
