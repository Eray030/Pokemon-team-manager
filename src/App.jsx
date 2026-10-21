import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
import List from './pages/List.jsx'
import Detail from './pages/Detail.jsx'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Pokémon App</h1>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </main>

      <Navigation />
    </div>
  )
}

export default App
