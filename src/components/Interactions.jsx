import { Link } from 'react-router-dom'

export function Interactions() {
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
        <div className="buttonGroup">
          <button>♥️ Play</button>
          <button>🍙 Feed</button>
          <button>☝🏼 Scold</button>
        </div>
      </div>
    </>
  )
}
