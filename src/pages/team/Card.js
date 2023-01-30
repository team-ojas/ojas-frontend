import './Card.css'

export default function Card (props) {
  return (
    <div className='card'>
      <img className='card-img' src='https://www.w3schools.com/css/img_forest.jpg' alt='' />
      <p className='card-name'>{props.name}</p>
    </div>
  )
}
