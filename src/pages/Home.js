import { GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home'>
        <div className="about">
            <h2>Hi I am Thimira Akash!☺️</h2>
            <div className="prompt">
              <p>A software developer with a passion for learning and coding!</p>
              <a href='https://www.linkedin.com/in/thimira-akash-9a01251b3/' target="_blank"><LinkedIn /></a>
              <a href='https://github.com/thimira-akash' target="_blank"><GitHub /></a>

            </div>
        </div>

        <div className="skills"> 
          <h1>Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Front-end</h2>
              <span>HTML5,CSS3,ReactJS,jQuery,Bootstrap and NPM</span>
            </li>
            <li className='item'>
              <h2>Back-end</h2>
              <span>Node JS,Mono DB, Express JS</span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span>JavaScript,Java</span>
            </li>
          </ol>
        </div>
    </div>
  )
}

export default Home