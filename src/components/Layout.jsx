import { Link } from 'react-router-dom'

export function Layout({ children }) {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>
            <Link to="/">Digimon</Link>
          </h1>
        </div>
      </header>
      <div className="container">
        <main>{children}</main>
      </div>
      <footer className="footer">
        <div className="container">
          <p>Built with &hearts; in St. Petersburg, FL.</p>
        </div>
      </footer>
    </>
  )
}
