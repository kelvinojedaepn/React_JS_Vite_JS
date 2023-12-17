/* eslint-disable react/prop-types */
import {useEffect, useState, createContext} from "react"
import {tasks as data} from "../data/task"

export const TaskContent = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ])
  }

  function deleteTask(taskId) {
    // console.log(taskId)
    const finalDeleteTask = tasks.filter((task) => task.id !== taskId)
    setTasks(finalDeleteTask)
  }
  return (
    <>
      <TaskContent.Provider
        value={{
          tasks: tasks,
          createTask: createTask,
          deleteTask: deleteTask,
        }}
      >
        {props.children}
      </TaskContent.Provider>
    </>
  )
}
