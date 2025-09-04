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
                <p>Hi my name is Ammu, and I am like the best person in the whole world</p>
            </div>
        </div>
    </div> 
    );
}