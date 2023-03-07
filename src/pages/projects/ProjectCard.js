import './ProjectCard.css'

export default function ProjectCard (props) {
  return (
    <div className='project-card'>
      <img className='project-image' src={props.projectImage} alt='' />
      <h3 className='project-heading'>{props.projectName}</h3>
      <p className='project-desc'>{props.projectDesc}</p>
    </div>
  )
}
