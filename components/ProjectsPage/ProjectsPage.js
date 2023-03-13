import React from "react";
import Project from "../ProjectsPage/Project/Project.js";
import projects from "../ProjectsPage/projects.json";
import "./ProjectsPageStyle.css"
import Wrapper from "../Wrapper";
import Title from "../Title";


function Projects() {

    return (
        <div>
            <Wrapper>
            <Title> Projects: </Title>
            <Project
                title={projects[0].title}
                link={projects[0].link}
                repoLink={projects[0].repoLink}
                image={projects[0].image}
            />
            <Project
                title={projects[1].title}
                link={projects[1].link}
                repoLink={projects[1].repoLink}
                image={projects[1].image}
            />
            <Project
                title={projects[2].title}
                link={projects[2].link}
                repoLink={projects[2].repoLink}
                image={projects[2].image}
            />
            <Project
                title={projects[3].title}
                link={projects[3].link}
                repoLink={projects[3].repoLink}
                image={projects[3].image}
            />
            <Project
                title={projects[4].title}
                link={projects[4].link}
                repoLink={projects[4].repoLink}
                image={projects[4].image}
            />
            <Project
                title={projects[5].title}
                link={projects[5].link}
                repoLink={projects[5].repoLink}
                image={projects[5].image}
            />
            </Wrapper>
        </div>
    );


}


export default Projects