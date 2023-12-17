/* eslint-disable react/prop-types */
import {useContext} from "react"
import {TaskContent} from "../context/TaskContext"
import TaskCard from "./TaskCard"
function TaskList() {
  const {tasks} = useContext(TaskContent)
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>
  }
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  )
}

export default TaskList
