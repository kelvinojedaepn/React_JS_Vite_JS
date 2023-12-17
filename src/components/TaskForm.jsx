import {useState, useContext} from "react"
import {TaskContent} from "../Context/TaskContext"
// eslint-disable-next-line react/prop-types
function TaskForm() {
  const {createTask} = useContext(TaskContent)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({
      title,
      description,
    })

    setTitle("")
    setDescription("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write the task"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Write description"
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        value={description}
      />
      <button>Guardar</button>
    </form>
  )
}

export default TaskForm
