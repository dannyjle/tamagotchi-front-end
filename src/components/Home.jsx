import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <div className="pets">
        <h2>Gatomon</h2>
        <p></p>
        <dl className="status">
          <dt className="statusTitle">Birthday:</dt>
          <dd>-</dd>
          <dt className="statusTitle">Hunger Level:</dt>
          <dd>-</dd>
          <dt className="statusTitle">Happiness Level:</dt>
          <dd>-</dd>
        </dl>
        <Link to="/interactions/">
          <button>Interact</button>
        </Link>
      </div>

      <div className="create">
        <h2>Create New Digimon:</h2>
        <form>
          <h4>Name:</h4>
          <input type="text"></input>
          <button>Create</button>
        </form>
      </div>
      <div className="delete">
        <h2>Delete Old Digimon:</h2>
        <form>
          <h4>Name:</h4>
          <input type="text"></input>
          <button>Delete</button>
        </form>
      </div>
    </>
  )
}
