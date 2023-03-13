import React from "react";

function Project(props){
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.title}</strong>
          </li>
          <li>
            <strong>Link:</strong> <a href={props.link} target="_blank" rel="noopener noreferrer">Project</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href={props.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>       
       </div>
    </div>
  )
}

export default Project
