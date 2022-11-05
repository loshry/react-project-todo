import "./TodoForm.scss";

import React, {useState} from 'react'
import Button from "../Button/Button";



const TodoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState("");
    const handleChange = (e) => {
        setUserInput(e.Target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");

        props.onSubmit ({
        id: Math.floor(Math.random()*100000),
        text: userInput
      })

      // setUserinput("")
    }


  return (
    <form onSubmit={handleSubmit} className="todoForm">
        <input 
          value={userInput} 
          type="text"  
          onChange={handleChange} 
          placeholder="Add your task here. . ."
          name="text"
          className="todoForm__input"
          />
        <Button type="submit" buttonText={"+"} isSecondary={true}/>
    </form>
  )
}

export default TodoForm