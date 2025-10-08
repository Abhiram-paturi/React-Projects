import React,{useState} from "react";
const ToDo=()=>{
   const [tasks,setTasks]=useState([]);
   const [input,setInput]=useState('');
   const [edit,setEdit]=useState(null);
   const handleChange=(e)=>{
     setInput(e.target.value);
   }
   
   const handleAddClick=()=>{

    if(edit!=null){
     const updatedTasks=[...tasks];
     updatedTasks[edit]=input;
     setTasks(updatedTasks);
     setEdit(null);
    }else{
     setTasks((e)=>[...e,input]);
    }
     setInput('');
   }

   const handleUpdate=(index)=>{
     setInput(tasks[index]);
      setEdit(index);
   }

   const handleDelete=(index)=>{
     setTasks(tasks.filter((task,id)=>id!==index));
   }
  return (
    <>
      <div>
        <input type="text" value={input} onChange={(e)=>handleChange(e)} placeholder="Enter the task"/>
        <button onClick={()=>handleAddClick()}>
          {edit!=null?"Update":"Add"}
        </button>

        <ul>
        {
          tasks.map((task,index)=>(
            <li key={index}>
              {task} &nbsp;
              <button onClick={()=>handleUpdate(index)}>Update</button> &nbsp;
              <button onClick={()=>handleDelete(index)}>Delete</button> &nbsp;
              <br />
            </li>
          ))
        }
        </ul>
      </div>
    </>
  )
}
export default ToDo;