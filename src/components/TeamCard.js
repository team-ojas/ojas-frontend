import './TeamCard.css'

export default function TeamCard (props) {
  return (
    <div className='card'>
      <img className='card-img' src='https://www.w3schools.com/css/img_forest.jpg' alt='' />
      <a className='socials' href='https://www.linkedin.com/feed/'>
        <i className='linkedin fa-brands fa-linkedin fa-2xl' />
      </a>
      <p className='card-name'>{props.name}</p>
    </div>
  )
}
