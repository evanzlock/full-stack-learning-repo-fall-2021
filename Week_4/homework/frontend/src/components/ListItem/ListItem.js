import "./style.css";
import { useEffect, useState } from "react";

export default function ListItem(props) {
    const icons =
    {
        "todo": <img src="/assets/checkmark.svg" alt="checkmark" className="todo"></img>,
        "done": <img src="/assets/arrow-undo.svg" alt="undo" className="done"></img>
    }
    console.log(icons)
    function click() {
        if (props.done == "todo") {
            return props.finish(props.index)
        }
        else {
            return props.undo(props.index)
        }
    }
    return (
        <li index={props.index}>
            <div className="list-item">
                {props.name}
                <div className={"icon-container"} onClick={() => click()}
                >{icons[props.done]}
                </div>
            </div>
        </li>
    );
}
