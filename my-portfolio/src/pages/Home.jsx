import Welcome from '../components/Welcome.jsx'
import Contact from '../components/Contact.jsx'
import Skills from '../components/Skills.jsx'

function Home() {
  return (
    <div className='Home'>
      {/* This is the welcome information */}
      <Welcome />
      
      <div className="columns">
        <div className="column">
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home