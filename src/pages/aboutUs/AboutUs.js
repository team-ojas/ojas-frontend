import './AboutUs.css'
import TeamCard from '../../components/TeamCard'
import Logo from './ojas-logo.jpg'

export default function AboutUs () {
  const members = [
    { name: 'Bhavesh', link: 'https://developer.mozilla.org/en-US/', imageLink: 'https://cdn.pixabay.com/photo/2021/08/26/01/56/mountains-6574828__340.jpg' },
    { name: 'Bhavesh', link: 'https://developer.mozilla.org/en-US/', imageLink: 'https://cdn.pixabay.com/photo/2021/08/26/01/56/mountains-6574828__340.jpg' }
  ]

  return (
    <div className='about-us-div'>
      <div className='about-body'>
        <div className='about-content'>
          <h1 style={{ marginBottom: '30px' }}>About Us</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui libero, nulla quo sequi doloribus dicta, ea similique voluptatum minus voluptates architecto beatae quam eum nam fugiat. Soluta, saepe ipsa?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui libero, nulla quo sequi doloribus dicta, ea similique voluptatum minus voluptates architecto beatae quam eum nam fugiat. Soluta, saepe ipsa?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui libero, nulla quo sequi doloribus dicta, ea similique voluptatum minus voluptates architecto beatae quam eum nam fugiat. Soluta, saepe ipsa?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui libero, nulla quo sequi doloribus dicta, ea similique voluptatum minus voluptates architecto beatae quam eum nam fugiat. Soluta, saepe ipsa?</p>
        </div>
        <div className='cc-cards'>
          {members.map((member, index) => <TeamCard key={index} name={member.name} link={member.link} imageLink={member.imageLink} />)}
        </div>
      </div>

      <div className='logo-img-div'>
        <img className='logo-image' src={Logo} alt='' />
      </div>
    </div>
  )
}
