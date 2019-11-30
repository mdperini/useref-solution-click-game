import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/*
    INSTRUCTIONS:
    Create a "todo" app witht the follwing criteria:
        1. The user can add new todo items.
        2. The user can remove todo items.
*/

const generatedId = () => '_' + Math.random().toString(36).substr(2,9);

const Todo = () => {
    const [todos, setTodos] = React.useState([])
    const [input, setInput] = React.useState('')

    const handleSubmit = () => {
        setTodos((todos)=> todos.concat(
            {
                text: input,
                id: generatedId()
            }))
        setInput('')
    }


const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id))

return (
    <div>
        <input 
         type='text'
         value={input}
         onChange={(e) => setInput(e.target.value)}
         placeholder='New Todo'
         />
         
         <button onClick={handleSubmit}>Submit</button>

         <ui>
           {todos.map(({ text, id}) => (
               <li key={id}>
                   <span>{text}</span>
                   <button onClick={() => removeTodo(id)}>x</button>
            </li>
           ))}  
         </ui>
    </div>
    )
 }

 const rootElement = document.getElementById('root');
 ReactDOM.render(<Todo />, rootElement);