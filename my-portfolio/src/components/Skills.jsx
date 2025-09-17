import '../css/skills.css'

const skills = [
  { category: "Languages", items: ["C++", "C#", "Java", "SQL", "Python", "Scala", "MATLAB"] },
  { category: "Frameworks / Tools", items: ["ROS", "Django", "matplotlib", "NumPy", "React", "HTML", "CSS", "REST API"] }
];

export default function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skills.map((group, idx) => (
        <div key={idx} className="skill-card">
          <h4>{group.category}</h4>
          <div className="tags">
            {group.items.map((skill, i) => (
              <span key={i} className="tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
