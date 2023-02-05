import TeamCard from '../../components/TeamCard'
import './Team.css'

export default function Team () {
  return (
    <div className='team-page'>

      <div className='team-content'>
        <p className='our-team' style={{ marginBottom: '30px' }}>Our Team</p>
        <p className='year'>Final Year</p>
      </div>

      <div className='flex-container'>
        <TeamCard name='Khwab Kalra' />
        <TeamCard name='Khwab Kalra' />
        <TeamCard name='Khwab Kalra' />
        <TeamCard name='Khwab Kalra' />
      </div>
    </div>
  )
}
