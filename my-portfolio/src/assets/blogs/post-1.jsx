import internet from '../pictures/Old-Internet.webp'

export default function Blog1() {
  return (
    <div className="Blog1">
        <div className="columns">
            <div className="column">
                <h1> My First Blog Post </h1>
                <p> 
                    I don't know how many people will ever read this, but today (12/10/2025) I made my own personal website. 
                    <br /><br />
                    Since I was a child I was always fascinated by the internet, and I always wondered what it would be like
                    to have a little corner of the internet to call my own.
                    <br /><br />
                    I have a tonne of great things planned for this space. And I will keep
                    working on it whenever I have free time so look forward to it pals!
                </p>
                <br /><br />
                <div className="logo">
                    <img
                        src={internet}
                        alt="There's meant to be an image here, sorry."
                    />
                </div>
                <br /><br />
                <p>
                    My greatest mission is to bring a smile to someone's face :) Let me explain... 
                    <br /><br />
                    I've been a huge fan of video games ever since my dad introduced me
                    to Portal 2 ( if you still haven't played it, its a masterpiece by the way ).
                    <br /><br />
                    To me, video games are more than just a waste of time (how dare I), its a way to connect with friends,
                    family and even cousins that you barely meet. It brings people together around a fun gimmick or a great story,
                    bringing laughter and precious moments of joy with it.
                    <br /><br />
                    Video games might console you when you are upset, question the meaning of life, and can be a much needed break when
                    things get tough. For this reason, I will always love a video game if it can bring a smile to someones face :)
                    <br /><br />
                    And that's kind of what I would like to work on too! Technology that can bring a smile to someone's face!
                </p>
            </div>
        </div>
    </div> 
    );
}