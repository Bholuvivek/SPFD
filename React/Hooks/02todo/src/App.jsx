import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [list, setList] = useState([])

  const handleSubmit=()=>{
   let id = Math.floor((Math.random() *10)+10);
    setList([...list,{id:id, name:todo, completed:false}])
    setTodo('')
    // console.log(list);
    
  }
   
  const handleDelete=(id)=>{
    let updateList = list.filter((items)=> items.id!=id)
    setList(updateList)
    console.log(list);
  }

  return (
 <>
        <h1>My todo</h1>
        <input type="text" 
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Task</button>

       
          <ul>
            List
            { 
            list.map((items, index) => (
                <li key={index}
                >{items.name} 
                <button onClick={()=>handleEdit(items.id)}>Edit</button>
                <button onClick={()=>handleDelete(items.id)}>Delete</button></li>
               
              ))}
          </ul>
        
 </>
  )
}

export default App
