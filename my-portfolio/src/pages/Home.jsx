import Welcome from '../components/Welcome.jsx'
import Resume from '../components/Resume.jsx'
import './css/Resume.css'

function Home() {
  return (
    <div className='Home'>
      {/* This is the welcome information */}
      <Welcome />
      <Resume />
    </div>
  )
}

export default Home