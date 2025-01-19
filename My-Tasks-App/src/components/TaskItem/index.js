import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {text, tag} = taskDetails
  return (
    <li className="tasks-list-item">
      <p className="tasks-list-item-text">{text}</p>
      <p className="tasks-list-item-tag">{tag}</p>
    </li>
  )
}

export default TaskItem
