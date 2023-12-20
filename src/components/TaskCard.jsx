/* eslint-disable react/prop-types */
import {useContext} from "react"
import {TaskContent} from "../Context/TaskContext"

function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContent)
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <div key={task.id}>
        <h1 className="text-center text-xl font-bold capitalize">
          {task.title}
        </h1>
        <p className="text-gray-400 text-sm">{task.description}</p>
        <div className="flex">
          <button
            onClick={() => {
              deleteTask(task.id)
            }}
            className="bg-red-500 px-2 rounded-lg border-gray-100 mt-1 hover:bg-red-400 border-2 "
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
