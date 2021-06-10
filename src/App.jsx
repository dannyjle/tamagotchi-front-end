import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Home, Interactions, CreateDeletePets, Layout } from './components'

export function App() {
  return (
    <>
      {/* <nav>
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
      </nav> */}

      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/interactions/:id">
            <Interactions />
          </Route>
          <Route exact path="/createordelete/:id">
            <CreateDeletePets />
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </Layout>
    </>
  )
}
