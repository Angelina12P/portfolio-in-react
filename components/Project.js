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
                <strong> {props.title} </strong>
              </li>
              <li>
                <strong>Link:</strong> {props.link}
              </li>
              <li>
                <strong>GitHub:</strong> {props.repoLink}
              </li>
            </ul>       
           </div>
           </div>
      )

    
}


export default Project