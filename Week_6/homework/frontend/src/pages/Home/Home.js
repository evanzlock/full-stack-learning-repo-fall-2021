import "./style.css";
import ListItem from "../../components/ListItem/ListItem.js";
import Login from "../../components/Login/Login.js";
import { useEffect, useState, Fragment } from "react";

export default function Home() {
  // toDo: an array of tasks that need to be done; setToDo: a function that allows you to modify the task variable.
  const [toDo, setToDo] = useState([
  ]);

  // done: an array of tasks that are done; setToDo: a function that allows you to modify the task variable
  const [done, setDone] = useState([]);

  // taskName: a string of the name of task that you want to add; setToDo: a function that allows you to edit the taskName
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    async function loadTodo() {
      const request = fetch("localhost:3450/todos", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token")
        },
      })
      const response = await request.json();
      const status = await request.status;

      const data = resp.data;
      console.log(data);
    }
  }, [])
  // addTask: adds a task to toDo by adding the taskName
  function addTask() {
    console.log("addTask called");
    // makes sure that taskName is not blank
    if (taskName) {
      // makes sure that taskName is a new task
      toDo.includes(taskName)
        ? alert("Task already exists")
        : setToDo(toDo.concat(taskName));
      setTaskName("");
    }
  }

  // finishTask: finishes a task by removing it from the toDo and adding it to the done
  function finishTask(index) {
    const finishedTask = toDo[index];
    // to change state with an array you can use filter, which returns in a new array
    setToDo(toDo.filter((task) => task !== finishedTask));
    // to add an item to an state that is an array you can use concat, which returns a new array
    setDone(done.concat(finishedTask));
  }

  function undoTask(index) {
    const unDoneTask = done[index];
    // to remove an item from an state that is an array you must first make a copy and then splice the copy and then set the copy as the new state
    setDone(done.filter((task) => task !== unDoneTask));
    // to add an item to an state that is an array you can use concat, which returns a new array
    setToDo(toDo.concat(unDoneTask));
  }

  return (
    <Fragment>
      {localStorage.getItem("@token") ?
        (!!toDo.length && (
          <h2 className="summary">
            You have
            {toDo.length > 1
              ? " " + toDo.length + " tasks "
              : " " + toDo.length + " task "}
            left to do
          </h2>)) :
        <div id="login">
          <Login></Login>
        </div>
      }
      <div className="input-container">
        <input
          className="input-task"
          value={taskName}
          placeholder="Type your task here"
          onChange={(event) => setTaskName(event.target.value)}
        ></input>
        <button className="add-button" onClick={() => addTask()}>
          Add
        </button>
      </div>
      <div className="to-do-container">
        <h2>To Do</h2>
        <ul>
          {toDo.map((task, index) => (
            <ListItem
              key={index}
              index={index}
              task={task}
              type="todo"
              finishHandler={finishTask}
              undoHandler={undoTask}
            ></ListItem>
          ))}
        </ul>
      </div>
      <div className="done-container">
        <h2>Done</h2>
        <ul>
          {done.map((task, index) => (
            <ListItem
              key={index}
              index={index}
              task={task}
              type="done"
              finishHandler={finishTask}
              undoHandler={undoTask}
            ></ListItem>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
