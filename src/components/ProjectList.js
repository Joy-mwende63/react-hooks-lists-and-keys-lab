// // import React from "react";
// // import ProjectItem from "./ProjectItem";

// // function ProjectList({ projects }) {
// //   console.log(projects);
// //   return (
// //     <div id="projects">
// //       <h2>My Projects</h2>
// //       <div id="project-list">{/* render ProjectItem components here */}</div>
// //     </div>
// //   );
// // }

// // export default ProjectList;

// import React from "react";
// import ProjectItem from "./ProjectItem";

// function ProjectList({ projects }) {
//   console.log(projects); // This will log the projects array

//   return (
//     <div id="projects">
//       <h2>My Projects</h2>
//       <div id="project-list">
//         {projects.map((project) => (
//           <ProjectItem
//             key={project.id} // Use the id as the unique key
//             title={project.title}
//             description={project.description}
//             technologies={project.technologies}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectList;

import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          <ProjectItem
            key={project.id} // Ensure the key is unique
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
