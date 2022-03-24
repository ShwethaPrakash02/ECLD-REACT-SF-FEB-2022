import React from 'react'
import './List.css'

const List = () => {
  return (
    <div>
      <div className='soft-skills'>
        <h3>Soft Skills</h3>
        <ul>
          <li>Communication Skills</li>
          <li>People Management</li>
          <li>Reading</li>
          <li>Speaking</li>
          <li>Writing</li>
        </ul>
      </div>
      <div className='tech-skills'>
        <h3>Technical Skills</h3>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Material UI</li>
          <li>BootStrap</li>
          <li>Babel, Webpack</li>
        </ul>
      </div>
    </div>
  );
}

export default List