import Welcome from '../components/Welcome.jsx'
import Contact from '../components/Contact.jsx'

function Home() {
  return (
    <div className='Home'>
      {/* This is the welcome information */}
      <Welcome />
      
      <div className="columns">
        <div className="column">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home