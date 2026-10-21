import { NavLink } from 'react-router-dom'

// menu onderaan, NavLink krijgt de class "active" op de pagina waar je bent
function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">
        <svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z" /></svg>
        Home
      </NavLink>
      <NavLink to="/list">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="7" r="3" />
          <circle cx="5" cy="9" r="2.5" />
          <circle cx="19" cy="9" r="2.5" />
          <path d="M6 20c0-4 2.5-7 6-7s6 3 6 7M1 19c0-3 1.5-5 4-5M23 19c0-3-1.5-5-4-5" />
        </svg>
        Team
      </NavLink>
      <NavLink to="/detail/1">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h6M15 12h6" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        Detail
      </NavLink>
    </nav>
  )
}

export default Navigation
