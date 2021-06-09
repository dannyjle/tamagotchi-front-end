import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { CreatePet } from './components/create'
import { DeletePet } from './components/delete'
import { Feedings } from './components/feedings'
import { Playtimes } from './components/playtimes'
import { Scoldings } from './components/scoldings'

export function App() {
  return (
    <>
      <header className="title">
        <h1>Digimon Daycare</h1>
        <nav>
          <ul>
            <li className="home">
              <Link to="/">Home</Link>
            </li>
            <li className="interaction">
              <Link to="/1">Feed</Link>
            </li>
            <li className="interaction">
              <Link to="/2">Play</Link>
            </li>
            <li className="interaction">
              <Link to="/3">Scold</Link>
            </li>
            <li className="interaction">
              <Link to="/4">Create</Link>
            </li>
            <li className="interaction">
              <Link to="/5">Delete</Link>
            </li>
          </ul>
        </nav>
      </header>

      <h2>Gatomon</h2>

      <p></p>
      <dl>
        <dt>Birthday:</dt>
        <dd>DATE HERE</dd>
        <dt>Hunger Level:</dt>
        <dd>HUNGER HERE</dd>
        <dt>Happiness Level:</dt>
        <dd>HAPPINESS HERE</dd>
      </dl>

      <h2>Patamon</h2>

      <p></p>
      <dl>
        <dt>Birthday:</dt>
        <dd>DATE HERE</dd>
        <dt>Hunger Level:</dt>
        <dd>HUNGER HERE</dd>
        <dt>Happiness Level:</dt>
        <dd>HAPPINESS HERE</dd>
      </dl>

      <h2>Lopmon</h2>

      <p></p>
      <dl>
        <dt>Birthday:</dt>
        <dd>DATE HERE</dd>
        <dt>Hunger Level:</dt>
        <dd>HUNGER HERE</dd>
        <dt>Happiness Level:</dt>
        <dd>HAPPINESS HERE</dd>
      </dl>

      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/1">
          Feed
          <Feedings />
        </Route>
        <Route exact path="/2">
          Play
          <Playtimes />
        </Route>
        <Route exact path="/3">
          Scold
          <Scoldings />
        </Route>
        <Route exact path="/4">
          Create
          <CreatePet />
        </Route>
        <Route exact path="/5">
          Delete
          <DeletePet />
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </>
  )
}
