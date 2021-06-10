import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Home, Interactions, Layout } from './components'

export function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/interactions/">
            <Interactions />
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </Layout>
    </>
  )
}
