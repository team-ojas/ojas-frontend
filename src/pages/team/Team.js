import TeamCard from '../../components/TeamCard'
import './Team.css'

export default function Team () {
  return (
    <div className='team-page'>

      <div className='team-content'>
        <h1>Final Year</h1>
      </div>

      <div className='flex-container'>
        <TeamCard name='Khwab Kalra' />
        <TeamCard name='Khwab Kalra' />
        <TeamCard name='Khwab Kalra' />
        <TeamCard name='Khwab Kalra' />
        <TeamCard name='Khwab Kalra' />
        <TeamCard name='Khwab Kalra' />
      </div>
    </div>
  )
}
