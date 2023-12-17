import {useState, useEffect, createContext} from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  )
}

export default App
