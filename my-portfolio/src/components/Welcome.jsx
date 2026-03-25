import jiggly from '../assets/jiggly.jpg'
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
                    Hi! My name is <strong>Ammu</strong> but call me GummyBearAmnesia :)
                    I am a Computer Science student at King's College London, and I am in
                    my third year. I am really interested in Game Dev, Linux, and Robotics!
                    
                    And I guess web design is cool too ...
                </p>
            </div>
        </div>
    </div> 
    );
}