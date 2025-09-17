import Contact from '../components/Contact.jsx'
import '../css/resume.css'

function Resume() {
  return (
    <div className="Resume">
      <p>
        <h1>Aamukta Thogata</h1>
      
        <Contact/>
      </p>
      
      <h3>Education</h3>
      <ul>
        <li>
          <strong>King’s College London – MSc Computer Science, 2023–2027</strong>
          <ul>
            <li>Expected 1st Class Honors</li>
            <li>Student Representative</li>
          </ul>
        </li>
        <li>
          <strong>Woodford County High School – Graduated 2022</strong>
          <ul>
            <li>A*A*A Maths, Computer Science, Physics</li>
          </ul>
        </li>
      </ul>

      <h3>Experience</h3>
      <ul>
        <li>
          <strong>The Kusp Hub – Software Engineering Intern, Jun 2025 – Aug 2025</strong>
          <ul>
            <li>Contributed to both frontend (React, TypeScript) and backend (Java, Spring, PostgreSQL) development.</li>
            <li>Implemented features such as job posting management, applicant tracking, notifications, and error handling.</li>
            <li>Wrote and maintained backend tests to ensure reliability of core functionality.</li>
            <li>Designed and prototyped new UI/UX flows in Figma, later showcasing them at the end-of-internship presentation.</li>
            <li>Improved developer experience by documenting setup instructions (frontend & backend) and refining workflow practices.</li>
          </ul>
        </li>

        <li>
          <strong>Barclays – Software Engineering Spring Intern, Feb – Apr 2025</strong>
          <ul>
            <li>Explored how regulation, compliance, and data security requirements influence technical design in financial systems.</li>
            <li>Engaged with senior engineers and professionals to understand technical design trade-offs in banking.</li>
          </ul>
        </li>

        <li>
          <strong>King’s College London – Research Mentee: Ethics in AI and Large Language Models, Jan – Mar 2025</strong>
          <ul>
            <li>Conducted structured data analysis on model outputs to assess bias, fairness and privacy trade-offs.</li>
            <li>Analysed regulatory frameworks, fairness, and governance in AI systems, focusing on societal impact.</li>
            <li>Engaged with ongoing PhD research, conducting experiments and presenting findings on privacy and safety in LLMs to peers and lecturers.</li>
          </ul>
        </li>

        <li>
          <strong>BNP Paribas, UK – Work Experience, Jun – Aug 2023</strong>
          <ul>
            <li>Learned about testing environments and release schedules to ensure reliable software, team management software such as Jira.</li>
            <li>Observed software development and Agile methodologies in large-scale, high-stakes banking.</li>
          </ul>
        </li>
      </ul>



      <h3>Skills</h3>
      <ul>
        <li><strong>Programming Languages and Frameworks –</strong> C++, C#, Java, SQL, Python (ROS, Django, matplotlib, NumPy), Scala, MATLAB, React, HTML, CSS, REST API</li>
        <li><strong>Tools and Software –</strong> Unity, Git, GitHub, Adobe Photoshop, Premiere Pro, After Effects, Final Cut Pro</li>
        <li><strong>Knowledge Areas –</strong> Artificial Intelligence, Data Analysis & Visualisation, Ethics & Regulation in AI, Quantum Computing & Quantum Mechanics (Completed 1 year of a Physics Degree at King’s before transferring to Computer Science)</li>
        <li><strong>Achievements and Experiences –</strong> Amazon AWS Insight Day 2024; AI (Samsung Bixby) competition winner 2021; UK Maths Challenge: Best in Year 2016, Gold 2017 & 2018; Cambridge Film Competition Winner 2019; KCL Tech Committee</li>
        <li><strong>Soft Skills –</strong> Analytical Thinking, Leadership, Collaboration, Communication, Creativity</li>
      </ul>


      

    </div>
      
  )
}

export default Resume