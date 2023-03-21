import './ProjectCard.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import placeholderImg from './image.jpg'

export default function ProjectCard (props) {
  return (
    <div className='project-card'>
      <LazyLoadImage
        src={props.projectImage}
        placeholderSrc={placeholderImg}
        effect='black-and-white'
        className='project-image'
        alt='Project Images'
      />
      <h3 className='project-heading'>{props.projectName}</h3>
      <p className='project-desc'>{props.projectDesc}</p>
    </div>
  )
}
