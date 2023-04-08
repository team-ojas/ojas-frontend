import ProjectCard from '../../components/ProjectCard'
import './Projects.css'

export default function Projects () {
  const projects = [
    {
      projectName: 'Predicting Battery Degradation with Trinket M0 & Python',
      projectDesc: 'As the world witnesses the technological advancement in EVs. Battery degradation is to be an obstruction. This project gives a solution where we can check the percentage of battery degradation and can alarm the user to prevent accidents.',
      projectImage: 'https://i.imgur.com/koZSe7R.jpg'
    },

    {
      projectName: 'Non Invasive Glucometer using NIR Spectroscopy',
      projectDesc: 'This project provides a painless, non-invasive method for the detection of glucose levels in the human body. The proposed model is a painless non-obtrusive prototype utilizing NIR (near infrared) spectroscopy methodology.',
      projectImage: 'https://i.imgur.com/VyHUgUS.jpg'
    },

    {
      projectName: 'Website for checking details related to the Electrical Engineering Department ',
      projectDesc: 'One stop for all information! A website where all info regarding faculty, blogs, research papers, time tables, placements, and much more will be available related to the electrical engineering department, ',
      projectImage: 'https://i.imgur.com/rVAuq7c.png'
    },

    {
      projectName: 'Earthquake Detection Using a Laser Range Finder',
      projectDesc: 'One stop for all information! A website where all info regarding faculty, blogs, research papers, time tables, placements, and much more will be available related to the electrical engineering department, ',
      projectImage: 'https://i.imgur.com/iQfhqzT.jpg'
    },
    {
      projectName: 'Design and Development of a low cost automatic ventilator',
      projectDesc: 'One stop for all information! A website where all info regarding faculty, blogs, research papers, time tables, placements, and much more will be available related to the electrical engineering department, ',
      projectImage: 'https://i.imgur.com/NSgVoDO.jpg'
    },
    {
      projectName: 'Attitude synchronisation of low rigid ',
      projectDesc: 'A research project put forth by Team Ojas to understand the attitude synchronization control of the rigid body system. It involves the use of Matlab, Simulink, and flight gear to create a simulated model for its demonstration. ',
      projectImage: 'https://i.imgur.com/s0NcCOm.png'
    },
    {
      projectName: 'Routine testing of Transformers',
      projectDesc: 'Tired of testing transformers manually? But not anymore. Team Ojas has designed a project that automates all the routine tests of the transformer using code and Matlab, reducing the manpower and simplifying the process. ',
      projectImage: 'https://i.imgur.com/GzuHMdn.jpg'
    },
    {
      projectName: 'Human Powered Powerbank',
      projectDesc: 'This human-powered power bank is used for the generation of electricity using leg movement and can be used for charging electronic gadgets. Primarily advantageous for rural people and travelers.',
      projectImage: 'https://i.imgur.com/zSfNVKK.jpg'
    }
  ]

  return (
    <div className='projects-page'>
      <div className='content'>
        <h1 style={{ marginBottom: '30px' }}>Projects</h1>
        <p>Displaying our technical prowess with the aim to create applications that actually create an impact globally.</p>
      </div>

      <div className='projects-container'>
        {projects.map((project, index) => <ProjectCard key={index} projectName={project.projectName} projectDesc={project.projectDesc} projectImage={project.projectImage} />)}
      </div>
    </div>
  )
}
