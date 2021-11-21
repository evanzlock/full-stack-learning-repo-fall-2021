import "./style.css";
import { useEffect, useState, Fragment } from "react";
import ListItem from "../../components/ListItem/ListItem.js";
export default function Home() {
  const [tasklist, setTaskList] = useState(['test task'])
  const [tasks, setTask] = useState(0);
  const [doneList, setDone] = useState(['test done']);

  function addTask(task) {
    if (!tasklist.includes(task)) {
      setTaskList(tasklist.concat(task))
    }
    else {
      alert("This task already exists")
    }
  }
  function completeTask(index) {

  }
  return (
    <Fragment>
      <h1>You have {tasks} tasks left to do  </h1>
      <input id="taskname" type="text" placeholder="Type your task here"></input>
      <button id="add" type="button" onClick={() => addTask(taskname.type)}>Add</button>
      <h1>To Do</h1>
      <ul id="todo">
        {
          tasklist.map(task => {
            return <li>{task}</li>
          })
        }
      </ul>
      <br></br>
      <h1>Done</h1>
      <ListItem todo={tasklist}></ListItem>
    </Fragment>
  );
}
