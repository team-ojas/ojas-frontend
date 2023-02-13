import TeamCard from '../../components/TeamCard'
import './Team.css'

export default function Team () {
  const members = [
    { name: 'Khwab Kalra', link: 'https://developer.mozilla.org/en-US/' },
    { name: 'Shubham Sharma', link: 'https://developer.mozilla.org/en-US/' },
    { name: 'Prakhar', link: 'https://developer.mozilla.org/en-US/' },
    { name: 'BHavesh', link: 'https://developer.mozilla.org/en-US/' }
  ]

  return (
    <div className='team-page'>

      <div className='team-content'>
        <h1>Final Year</h1>
      </div>

      <div className='flex-container'>
        {members.map((member, index) => <TeamCard key={index} name={member.name} link={member.link} />)}
      </div>
    </div>
  )
}
