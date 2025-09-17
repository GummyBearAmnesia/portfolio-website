import '../css/projects.css'
import '../css/resume.css'
import Robot from '../assets/projects/Robot.png'
import Game from '../assets/projects/Game3.png'
import Study from '../assets/projects/Study.png'
import Bridge from '../assets/projects/Bridge.webp'
import Population from '../assets/projects/Population.jpg'
import Sudoku from '../assets/projects/Sudoku.png'


const projects = [
  {
    title: "Hotel Delivery Robot",
    image: Robot,
    description: "Autonomous delivery robot with ROS, SMACH state machines, YOLO-based image detection, and actionlib navigation (pathfinding).",
    repo: "https://github.com/GummyBearAmnesia/ros-hotel-bot"
  },
  {
    title: "Virtual Study Room Website",
    image: Study,
    description: "A website for online study sessions through virtual study rooms. Users can create and join rooms, share resources and work collaboratively with friends.",
    repo: "https://github.com/GummyBearAmnesia/virtual-study-room"
  },
  {
    title: "2D RPG Game",
    image: Game,
    description: "A small RPG game inspired by Zelda, made with C# and Unity - Pending upload on github.",
  },
  {
    title: "Sudoku Solver",
    image: Sudoku,
    description: "A heuristic sudoku solver written in C++ with depth first search and stack based backtracking. Pending upload on github.",
  },
  {
    title: "Monte Carlo Simulation",
    image: Bridge,
    description: "Inspired by Squid Game, a simluation to test the probability of survival accross a glass bridge where each step has a 50% chance of death.",
    repo: "https://github.com/GummyBearAmnesia/monte-carlo-simulation"
  },
  {
    title: "Population Growth",
    image: Population,
    description: "Simluates population growth dynamics using a logistic map, visualizes the convergence points of the system for different growth rates",
    repo: "https://github.com/GummyBearAmnesia/population-growth-simulation"
  },
]

export default function Projects() {
  return (
    <div className="Projects">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <div className='description'>{proj.description}</div>
            {proj.repo && (
              <a 
                href={proj.repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="repo-link"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
      
      <div className="Resume">
        <h3>Projects [in more detail]</h3>
        <ul>
        <li>
          <strong>Hotel Delivery Robot – Python (ROS & YOLO) [Year 2]</strong>
          <ul>
            <li>Built an autonomous delivery robot with ROS, YOLO-based image detection, and actionlib navigation (pathfinding).</li>
            <li>Designed SMACH state machines to handle guest requests and exceptions, planning robot actions in a dynamic environment.</li>
            <li>Integrated computer vision, automation, and data-driven decision making for real-world service applications (such as in hotels).</li>
          </ul>
        </li>

        <li>
          <strong>Alternative Sudoku Solver – C++ [Year 2]</strong>
          <ul>
            <li>Created a heuristic Sudoku solver with a depth-first search algorithm and stack-based backtracking.</li>
            <li>Applied optimisation and algorithmic analysis to evaluate constraint satisfaction problems efficiently.</li>
          </ul>
        </li>

        <li>
          <strong>Virtual Study Space Website – React, Django [Year 2]</strong>
          <ul>
            <li>Developed online study rooms with real-time chat and collaboration tools using WebSockets.</li>
            <li>Used REST API to communicate with backend SQL database, collaborating via GitHub for version control and teamwork.</li>
          </ul>
        </li>

        <li>
          <strong>Monte Carlo Simulation – Python, MATLAB [Physics Project at University]</strong>
          <ul>
            <li>Implemented Monte Carlo simulations to model success probabilities of contestants crossing a probabilistic “bridge” (inspired by Squid Game).</li>
            <li>Designed statistical experiments across 10,000+ trials, analysing distributions of outcomes and computing success probabilities.</li>
            <li>Applied randomised algorithms, probability, and data-driven reasoning to evaluate decision-making under uncertainty.</li>
          </ul>
        </li>

        <li>
          <strong>2D RPG Game – Unity and C# [A-Level Final Project]</strong>
          <ul>
            <li>Implemented core gameplay mechanics (player movement, interactions, event systems) using Unity and C#.</li>
            <li>Created original pixel art and animation rigs in Photoshop and After Effects, integrating them into the engine for responsive character animations.</li>
          </ul>
        </li>
      </ul>
      </div>
    </div>
  )
}
