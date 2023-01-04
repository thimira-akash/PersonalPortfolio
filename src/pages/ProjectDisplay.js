import React from 'react'
import "../styles/ProjectDisplay.css"
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id];
  return (
    <div className='project'>
        <h1 className='display-heading'> {project.name} </h1>
        <img src={project.image} alt="" />
        <p> <b>Skills</b> :{project.skills} </p>
       <a href="https://github.com/thimira-akash" target="_blank" rel="noopener noreferrer"><GitHub /></a>  
    </div>
  )
}

export default ProjectDisplay