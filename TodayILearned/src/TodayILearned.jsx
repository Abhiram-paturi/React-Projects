import React,{useState,useEffect} from "react";
const TodayILearned=()=>{
 const [data,setData]=useState('');
 const [source,setSource]=useState('');
 const [entries,setEntries]=useState([]);
 useEffect(()=>{
          const existingEntries=JSON.parse(localStorage.getItem("tilEntries"));
          
          if(Array.isArray(existingEntries)) setEntries(existingEntries);
 },[])

    const handleSubmit=(event)=>{
        event.preventDefault();
        const entryLog={
            id:Date.now(),
            text:data,
            from:source
        };
          const updatedEntries=[entryLog,...entries];
        localStorage.setItem("tilEntries",JSON.stringify(updatedEntries));
        setData('');
        setSource('');
        setEntries(updatedEntries);
        
    }
   

    return (
        <div className="wrapper">
        <div className="header">
            <h1>Today I Learned</h1>
        </div>
        <div className="container">
        <form onSubmit={handleSubmit}>
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)} placeholder="What have you learned Today"/> <br />
            <input type="text" value={source} onChange={(e)=>setSource(e.target.value)} placeholder="Source(ChatGPT,Gemini..etc"/> <br />

           <button type="submit">Submit</button>
        </form>
    </div>
    </div>
    )
}

export default TodayILearned;