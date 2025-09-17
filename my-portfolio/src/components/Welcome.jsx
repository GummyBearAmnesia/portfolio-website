import jiggly from '../assets/jiggly.jpg'
import osha from '../assets/oshawott.webp'
import hello from '../assets/hello.png'
import imammu from '../assets/imammu.png'

export default function Welcome() {
  return (
    <div className="Welcome">
        <div className="columns">
            <div className="column">
                <div className="logo">
                    <img
                        src={jiggly}
                        alt="There's meant to be an image here, sorry."
                    />
                </div>
            </div>
            <div className="column">
                <div className="spacing">
                    <img
                        src={hello}
                        alt="Oops"
                    />
                </div>
                <div className="spacing">
                    <img
                        src={imammu}
                        alt="Oops"
                    />
                </div>
                <p>
                    Hi! My name is <strong>Aamukta Malyada</strong>, but feel free to call me Ammu :D
                    I am a Computer Science student at King's College London, and I am about to
                    start my third year. I am really interested in Game Dev, Linux, and Robotics!
                    
                    And I guess web design is cool too ...
                </p>
            </div>
        </div>
    </div> 
    );
}