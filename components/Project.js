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
                <strong>Project title</strong> {props.title}
              </li>
              <li>
                <strong>Link to the deployed version</strong> {props.link}
              </li>
              <li>
                <strong>Link to the GitHub repository</strong> {props.repoLink}
              </li>
              <li>
                <strong>GIF or screenshot of the deployed application</strong> {props.image}
              </li>
            </ul>
          </div>
        </div>
      );

    
    // * Must be a reusable component that ingests JSON data as props and renders a single instance for each project
    // * Must utilize Router props to properly render the right project based on user selection

}


export default Project