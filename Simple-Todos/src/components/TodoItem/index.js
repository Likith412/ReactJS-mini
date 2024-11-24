// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, onDeleteTodo} = props
  const {id, title} = todo

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todos-item-container">
      <p className="todos-text">{title}</p>
      <button className="todos-delete-btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
