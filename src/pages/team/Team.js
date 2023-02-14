import TeamCard from '../../components/TeamCard'
import './Team.css'

export default function Team () {
  const members = [
    { name: 'Khwab Kalra', link: 'https://developer.mozilla.org/en-US/', imageLink: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' },
    { name: 'Shubham Sharma', link: 'https://developer.mozilla.org/en-US/', imageLink: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpbWxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
    { name: 'Prakhar', link: 'https://developer.mozilla.org/en-US/', imageLink: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' },
    { name: 'BHavesh', link: 'https://developer.mozilla.org/en-US/', imageLink: 'https://cdn.pixabay.com/photo/2021/08/26/01/56/mountains-6574828__340.jpg' }
  ]

  return (
    <div className='team-page'>

      <div className='team-content'>
        <h1>Final Year</h1>
      </div>

      <div className='flex-container'>
        {members.map((member, index) => <TeamCard key={index} name={member.name} link={member.link} imageLink={member.imageLink} />)}
      </div>
    </div>
  )
}
