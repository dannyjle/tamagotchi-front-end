import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Gatomon } from './components/gatomon'
import { Lopmon } from './components/lopmon'
import { Patamon } from './components/patamon'

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
            <li className="digimon">
              <Link to="/1">Gatomon</Link>
            </li>
            <li className="digimon">
              <Link to="/2">Patamon</Link>
            </li>
            <li className="digimon">
              <Link to="/3">Lopmon</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/1">
          Gatomon
          <Gatomon />
        </Route>
        <Route exact path="/2">
          Patamon
          <Patamon />
        </Route>
        <Route exact path="/3">
          Lopmon
          <Lopmon />
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </>
  )
}
