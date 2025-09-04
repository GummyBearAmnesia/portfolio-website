import jiggly from '../assets/jiggly.jpg'
import osha from '../assets/oshawott.webp'

export default function Welcome() {
  return (
    <div className="Welcome">
        <img
            src={jiggly}
            alt="There's meant to be an image here, sorry."
        />

        <h1>Ammu's World</h1>
        <p>Hi my name is Ammu, and I am like the best person in the whole world</p>
    </div> 
    );
}