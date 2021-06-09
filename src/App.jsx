import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import {
  Home,
  Feeding,
  Playtime,
  Scolding,
  CreatePet,
  DeletePet,
} from './components'

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

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/feeding/:id">
          <Feeding />
        </Route>
        <Route exact path="/playing/:id">
          <Playtime />
        </Route>
        <Route exact path="/scolding/:id">
          <Scolding />
        </Route>
        <Route exact path="/create/:id">
          <CreatePet />
        </Route>
        <Route exact path="/delete/:id">
          <DeletePet />
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </>
  )
}
