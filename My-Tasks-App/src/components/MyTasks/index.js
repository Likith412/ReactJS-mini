import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TagItem from '../TagItem'
import TaskItem from '../TaskItem'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    tasksList: [],
    taskInput: '',
    tagInput: tagsList[0].optionId,
    selectedTagId: '',
  }

  onChangeTaskInput = event => {
    this.setState({
      taskInput: event.target.value,
    })
  }

  onChangeTagInput = event => {
    this.setState({
      tagInput: event.target.value,
    })
  }

  addTask = event => {
    event.preventDefault()
    const {taskInput, tagInput} = this.state
    if (taskInput !== '') {
      const newTask = {
        id: uuidv4(),
        text: taskInput,
        tag: tagInput,
      }

      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, newTask],
        taskInput: '',
        tagInput: tagsList[0].optionId,
      }))
    }
  }

  changeSelectedTag = id => {
    this.setState(prevState => ({
      selectedTagId: prevState.selectedTagId === id ? '' : id,
    }))
  }

  renderNoTasksView = () => (
    <div className="no-tasks-view-container">
      <p className="no-tasks-view-text">No Tasks Added Yet</p>
    </div>
  )

  render() {
    const {tasksList, taskInput, tagInput, selectedTagId} = this.state
    const filteredTasksList = selectedTagId
      ? tasksList.filter(eachItem => eachItem.tag === selectedTagId)
      : tasksList
    return (
      <div className="bg-container">
        <div className="create-tasks-container">
          <h1 className="create-tasks-heading">Create a task!</h1>
          <form className="create-tasks-form" onSubmit={this.addTask}>
            <label htmlFor="task" className="input-label">
              Task
            </label>
            <input
              type="text"
              id="task"
              className="input-field"
              placeholder="Enter the task here"
              value={taskInput}
              onChange={this.onChangeTaskInput}
            />
            <label htmlFor="tags" className="input-label">
              Tags
            </label>
            <select
              className="input-field"
              value={tagInput}
              onChange={this.onChangeTagInput}
              id="tags"
            >
              {tagsList.map(eachItem => (
                <option value={eachItem.optionId} key={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="add-task-btn">
              Add Task
            </button>
          </form>
        </div>
        <div className="show-tasks-container">
          <h1 className="show-tasks-heading">Tags</h1>
          <ul className="tags-list-container">
            {tagsList.map(eachItem => (
              <TagItem
                tagDetails={eachItem}
                key={eachItem.optionId}
                changeSelectedTag={this.changeSelectedTag}
                isSelected={selectedTagId === eachItem.optionId}
              />
            ))}
          </ul>
          <h1 className="show-tasks-heading">Tasks</h1>
          {filteredTasksList.length === 0 ? (
            this.renderNoTasksView()
          ) : (
            <ul className="tasks-list-container">
              {filteredTasksList.map(eachItem => (
                <TaskItem taskDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default MyTasks
