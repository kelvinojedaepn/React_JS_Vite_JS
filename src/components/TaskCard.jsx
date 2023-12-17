/* eslint-disable react/prop-types */
import {useContext} from "react"
import {TaskContent} from "../Context/TaskContext"

function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContent)
  return (
    <>
      <div key={task.id}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <button
          onClick={() => {
            deleteTask(task.id)
          }}
        >
          Eliminar
        </button>
      </div>
    </>
  )
}

export default TaskCard
