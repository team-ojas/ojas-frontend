import ProjectCard from '../../components/ProjectCard'
import './Projects.css'

export default function Projects () {
  const projects = [
    { projectName: 'RoboCarrom0', projectDesc: '1Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla dolores. Fugiat magnam fuga, aspernatur debitis delectus optio minus consectetur qui aut dolore expedita rerum quibusdam rem ab iste. Aliquam hhjoooooooooooooooooooooooooooo', projectImage: 'https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=', projectDate: '11/02/2003' },
    { projectName: 'RoboCarrom1', projectDesc: '2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla dolores. Fugiat magnam fuga, aspernatur debitis delectus optio minus consectetur qui aut dolore expedita rerum quibusdam rem ab iste. Aliquam', projectImage: 'https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=', projectDate: '11/02/2004' },
    { projectName: 'RoboCarrom2', projectDesc: '3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla dolores. Fugiat magnam fuga, aspernatur debitis delectus optio minus consectetur qui aut dolore expedita rerum quibusdam rem ab iste. Aliquam', projectImage: 'https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=', projectDate: '11/02/2005' },
    { projectName: 'RoboCarrom3', projectDesc: '4Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla dolores. Fugiat magnam fuga, aspernatur debitis delectus optio minus consectetur qui aut dolore expedita rerum quibusdam rem ab iste. Aliquam', projectImage: 'https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=', projectDate: '11/02/2006' },
    { projectName: 'RoboCarrom4', projectDesc: '5Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla dolores. Fugiat magnam fuga, aspernatur debitis delectus optio minus consectetur qui aut dolore expedita rerum quibusdam rem ab iste. Aliquam', projectImage: 'https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=', projectDate: '11/02/2007' },
    { projectName: 'RoboCarrom5', projectDesc: '6Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla dolores. Fugiat magnam fuga, aspernatur debitis delectus optio minus consectetur qui aut dolore expedita rerum quibusdam rem ab iste. Aliquam', projectImage: 'https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=', projectDate: '11/02/2008' }
  ]

  return (
    <div className='projects-page'>
      <div className='content'>
        <h1 style={{ marginBottom: '30px' }}>Projects</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui libero, nulla quo sequi doloribus dicta, ea similique voluptatum minus voluptates architecto beatae quam eum nam fugiat. Soluta, saepe ipsa?</p>
      </div>

      <div className='projects-container'>
        {projects.map((project, index) => <ProjectCard key={index} projectName={project.projectName} projectDesc={project.projectDesc} projectImage={project.projectImage} />)}
      </div>
    </div>
  )
}
