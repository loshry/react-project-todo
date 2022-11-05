import React from 'react'
import Button from "./components/Button/Button"
import TodoForm from "./components/TodoForm/TodoForm"


const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>My Todos</h1>
        <Button buttonText={"Reset"} isSecondary={false} />
      </header>
      <TodoForm />


    </div>
  )
}

export default App