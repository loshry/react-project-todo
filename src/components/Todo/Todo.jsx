import React, {useState} from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'

const Todo = () => {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

  return todos.map((todo, index))
}

export default Todo