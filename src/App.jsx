import { useState } from "react"


function App() {
        

  const [todoData , setTodoData] = useState("")
   const [todolist , setTodoList] = useState([])
  const handleAdd = () =>{
    const arr = [...todolist]
    if(todoData.trim()==="")return
    arr.push({id : Math.floor(Math.random() * 9000) , data:todoData})
    setTodoList(arr)
    setTodoData("")
    localStorage.setItem("todo" , JSON.stringify(arr))


  }
  const deleteTodo = (id)=>{
    setTodoList(todolist.filter(todolist => todolist.id !== id))
  }

  return (
      
      <div className="flex justify-center items-center h-dvh">
        
    
             <div className="flex justify-center w-fit p-4 min-h-[300px]  items-center  gap-3 flex-col rounded-2xl border border-solid border-black">
            <div className="flex gap-3">
                <input value={todoData} className="border border-black text-3xl rounded-r-xl rounded-l-xl"  onChange={(e) =>  setTodoData(e.target.value)} type="text" />
            <button className="border border-black text-2xl p-2 bg-slate-500 text-white rounded-xl" onClick={handleAdd}>Add</button>

            </div>
            <div >
                <ol className="list-decimal ">
                   
                {
                  todolist.map((item)=>(
                     <li key={item.id}>
                     <div className="flex gap-3 mt-4">
                    

                        <p className="text-2xl">{item.data}</p>
                      <button className="bg-blue-700 p-1 rounded-xl text-white" >Edit</button>
                      <button className="bg-red-600 p-1 rounded-xl text-white" 
                     
                       onClick={() => deleteTodo (item.id)}
                    
                       
                      >Deleat</button>
                     </div>
                    </li>
                  ))
                    
                  
                }
                  
                   
                </ol>
            </div>
        </div>
   
      </div>
 


  )
}

export default App
