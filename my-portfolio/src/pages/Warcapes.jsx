import { useState } from 'react';
import Confetti from 'react-confetti'; // npm install react-confetti
import '../css/warcapes.css';

function Warcapes() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className='columns'>
      {unlocked && <Confetti numberOfPieces={150} recycle={false} />}
      
      <div className='column'>
        <p
          className={unlocked ? 'hero unlocked' : 'hero'}
          onClick={() => setUnlocked(true)}
        >
          Not all heroes wear capes.
        </p>

        {unlocked && (
          <div className="easter-egg">
            👽👽✨ Loyal fans, please wait a bit longer. Pterri is on the way! ✨👽👽
            <div className="floating-capes">
              🥳🥳🥳🥳
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Warcapes;
