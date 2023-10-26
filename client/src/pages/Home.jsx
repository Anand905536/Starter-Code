import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";

const Home = () => {
  const [taskArray, setTaskArray] = useState([])
  const [task, setTask] = useState("")
  const [bool, setBool] = useState(false)
  const [id, setId] = useState(0)

  const addTask = () => {
    setTaskArray([...taskArray, task])
    setTask("")
  }

  const deleteHandler = (e) => {
    console.log(e)
    const finalArray = taskArray.filter((item) => {
      return item!==e
    })
    setTaskArray(finalArray)
  }

  const edithandler = (e) => {
   
    taskArray.map((data)=>{
      if(data===e){
       data=task
       console.log(data,task)
      }
    })
  }

  useEffect(() => {
    
  }, [edithandler])

  return (
    <div className="bg-slate-900 text-white flex flex-col justify-center items-center gap-4 p-2 h-screen w-full">
      <h1>Home page</h1>
      <div style={{ display: "flex", width: "500px", justifyContent: "spaceEvenly", border: "2px solid red" }}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} width="100" height="50"
          style={{ textAlign: "center", height: "50px", width: "500px", color: "black" }} placeholder="add task" />
        <button onClick={addTask}>Add Task</button>
      </div>

      {
        bool &&
        <div>
          <input value={task} onChange={(e) => setTask(e.target.value)} style={{ width: "200px", height: "60px", backgroundColor: "white", color: "black", textAlign: "center" }}
            type="text" placeholder="edit details" />
          <button onClick={() => { setBool(false) }}>Edit</button>
        </div>
      }
      {/* <Counter /> */}
      {
        taskArray.length > 0 ? taskArray.map((data, idx) => {
          return (
            <div style={{ display: "flex", width: "400px" }} key={idx}>
              <h2 style={{ width: "200px", height: "60px", backgroundColor: "white", color: "black", textAlign: "center" }}>{data}</h2>
              <button style={{ backgroundColor: "white", color: "red", width: "100px" }} onClick={() => deleteHandler(data)}>Delete</button>
              <button style={{ backgroundColor: "white", color: "red", width: "100px" }} onClick={() => { setBool(true);edithandler(data)}}>Edit</button>
            </div>
          )
        })
          :
          <div>No Element present</div>
      }
    </div>
  );
};

export default Home;
