import '../css/projects.css'
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
    description: "Autonomous delivery robot with ROS, YOLO-based image detection, and actionlib navigation (pathfinding).",
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
    </div>
  )
}
