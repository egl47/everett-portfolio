import { ProjectCard } from '../../components/project-card'

// This would typically come from a database or API
const projects = [
  { name: 'PocketML', imageUrl: '/images/project_covers/cover-pocketml.jpg', projectUrl: 'https://github.com/CornellDataScience/PocketML' },
  { name: 'FileBuddy', imageUrl: '/images/project_covers/cover-filebuddy.jpg', projectUrl: 'https://github.com/CornellDataScience/file-buddy' },
  { name: 'Formula 1 ML', imageUrl: '/images/project_covers/cover-f1ml.jpg', projectUrl: 'https://docs.google.com/presentation/d/1N8R0vwzlTPxukjAN_UZvxwG_0BMqE7Kv/edit?usp=sharing&ouid=104300391341701925726&rtpof=true&sd=true' },
  { name: 'OCaml Dungeon Quest', imageUrl: '/images/project_covers/cover-totl.jpg', projectUrl: 'https://www.youtube.com/playlist?list=PL7N7FQLnh5PtYIWkngQLFpRIdGUrsZqIB' },
]

export default function ProjectGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            name={project.name} 
            imageUrl={project.imageUrl} 
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  )
}

