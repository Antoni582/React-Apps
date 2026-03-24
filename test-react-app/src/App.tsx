import {Routes, Route, Link} from 'react-router'
import HomeView from './Views/Home/Home.View'
import Wordle from './Views/Wordle/Wordle'


const App = () => {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/wordle">Wordle</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/wordle" element={<Wordle />} />
      </Routes>
    </div>
  )
}

export default App
