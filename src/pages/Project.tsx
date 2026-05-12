import { use, useMemo } from "react";
import ProjectContext from "../components/ProjectProvider/ProjectContext";
import { Link, useParams } from "react-router";
import { Typography } from "../components/Typography";
import Avatar from "../components/Avatar";
import RecList from "../components/RecList";

function Project() {
  const params = useParams();

  const { filterProjects, getProjectsRandom } = use(ProjectContext);
  const project = useMemo(
    () => filterProjects({ id: params.projectId })[0],
    [params.projectId],
  );

  return (
    project && (
      <div className="gap-md flex h-full flex-col lg:flex-row">
        <div className="flex flex-col gap-md lg:flex-2">
          <a href={project.link} target="_blank">
            <img
              src={project.img}
              alt={project.name}
              className="w-full rounded-md aspect-video object-cover"
            />
          </a>

          <Typography variant="h4Bold">{project.name}</Typography>

          <div className="flex gap-sm items-center">
            <Link to={`/categories/${project.category.id}`}>
              <Avatar img={project.category.icon} />
            </Link>
            <div className="flex flex-col flex-1">
              <Typography variant="bodyLg" className="text-start">
                {project.category.name} | {project.group.name}
              </Typography>
            </div>
            {/* <Icon src="src\assets\icons\information-line.svg" /> */}
          </div>

          <Typography
            variant="bodyMd"
            className="bg-grayscale-200 rounded-sm p-md"
          >
            {project.description}
          </Typography>
        </div>
        <RecList projects={getProjectsRandom(5)} />
      </div>
    )
  );
}

export default Project;
