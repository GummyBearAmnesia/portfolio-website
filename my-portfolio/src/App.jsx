import Header from './components/Header.jsx'
import Welcome from './components/Welcome.jsx'
import './App.css'

function App() {
  return (
    <div className='App'>
      {/* This is the navbar at the top */}
      <Header />
      {/* This is the welcome information */}
      <Welcome />
    </div>
  )
}

export default App
