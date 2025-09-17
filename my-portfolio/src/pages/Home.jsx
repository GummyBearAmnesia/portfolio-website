import Welcome from '../components/Welcome.jsx'
import Contact from '../components/Contact.jsx'

function Home() {
  return (
    <div className='Home'>
      {/* This is the welcome information */}
      <Welcome />
      
      <p>
        <strong> Contact me here : <Contact /> </strong>
      </p>
    </div>
  )
}

export default Home