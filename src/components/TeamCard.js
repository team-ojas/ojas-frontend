import './TeamCard.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import placeholderImg from './image.jpg'

export default function TeamCard (props) {
  return (
    <div className='card'>
      <LazyLoadImage
        src={props.imageLink}
        placeholderSrc={placeholderImg}
        effect='black-and-white'
        className='card-img'
        alt='Profile Picture'
        threshold={500}
      />
      <a className='socials' href={props.link}>
        <i className='linkedin fa-brands fa-linkedin fa-2xl' />
      </a>
      <p className='card-name'>{props.name}</p>
    </div>
  )
}
