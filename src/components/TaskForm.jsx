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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-xl text-center text-white font-bold mb-4">Crear la tarea</h1>
        <input
          type="text"
          placeholder="Write the task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 rounded-lg w-full mb-3"
          autoFocus
        />
        <textarea
          placeholder="Write description"
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          className="bg-slate-300 p-3 rounded-lg w-full mb-3"
          value={description}
        />
        <button className="bg-sky-500 text-white hover:bg-blue-600 rounded-lg right-auto px-2 border-white border-2">Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm
