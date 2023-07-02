import FeaturedProject from './FeaturedProject'
import projects from '@/data/projects/projects'

type Props = {}

function FeaturedArticles({}: Props) {

  return (
    <ul className="grid grid-cols-2 gap-16 mb-8">
        {projects.filter(project => project.isFeatured).map(project => {
            return (
                <FeaturedProject
                key={project.id}
                title={project.title}
                summery={project.summery}
                image_path={project.image_path}
                deployed_url={project.deployed_url}
                github_url={project.github_url}
              />
            )
        }
        )}
    </ul>
  )
}

export default FeaturedArticles