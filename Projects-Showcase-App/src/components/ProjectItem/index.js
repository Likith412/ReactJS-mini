import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {imageUrl, name} = projectDetails
  return (
    <li className="list-item">
      <img className="list-item-img" src={imageUrl} alt={name} />
      <p className="list-item-name">{name}</p>
    </li>
  )
}

export default ProjectItem
