import "./style.css";
import { useEffect, useState, Fragment } from "react";
import ListItem from "../../components/ListItem/ListItem.js";
export default function Home() {
  const [tasklist, setTaskList] = useState([])
  const [name, setTask] = useState("");
  const [doneList, setDone] = useState([]);

  function addTask() {
    if (name) {
      if (!tasklist.includes(name)) {
        setTaskList(tasklist.concat(name))
      }
      else {
        alert("This task already exists")
      }
      setTask("")
    }
  }
  function completeTask(index) {
    setTaskList(tasklist.filter((task) => task != tasklist[index]))
    setDone(doneList.concat(tasklist[index]))
  }
  function uncompleteTask(index) {
    setDone(doneList.filter((task) => task != doneList[index]))
    setTaskList(tasklist.concat(doneList[index]))
  }
  return (
    <Fragment>
      <h1>You have {tasklist.length} tasks left to do  </h1>
      <div className="input">
        <input id="taskname"
          placeholder="Type your task here"
          value={name}
          onChange={event => setTask(event.target.value)}>
        </input>
        <button id="add" type="button" onClick={() => addTask()}>Add</button>
      </div>
      <div className="todo-container">
        <h1>To Do</h1>
        <ul>
          {
            tasklist.map((task, index) => (
              <ListItem
                index={index}
                key={index}
                done="todo"
                name={task}
                finish={completeTask}
                undo={uncompleteTask}
              ></ListItem>
            ))
          }
        </ul>
      </div>
      <br></br>
      <div className="done-container">
        <h1>Done</h1>
        <ul>
          {
            doneList.map((task, index) => (
              <ListItem
                done="done"
                name={task}
                key={index}
                index={index}
                finish={completeTask}
                undo={uncompleteTask}
              ></ListItem>
            ))}
        </ul>
      </div>
    </Fragment >
  );
}
