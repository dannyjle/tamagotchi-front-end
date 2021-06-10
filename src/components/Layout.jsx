import { Link } from 'react-router-dom'

export function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <header className="header">
          <div className="container">
            <h1 className="title">
              <Link to="/">Digimon</Link>
            </h1>
          </div>
        </header>
        <div className="container">
          <main className="main">{children}</main>
        </div>
        <footer className="footer">
          <div className="container">
            <p>Champions of the Digital World!</p>
            <p>Created by D.L. in St.Petersburg, FL</p>
          </div>
        </footer>
      </div>
    </>
  )
}
