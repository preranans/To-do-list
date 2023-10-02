import React from "react";

const ToDoLists = (props) => (
    <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" onClick={props.onDelete}>X</i>
        <li>{props.text}</li>
    </div>
);

export default ToDoLists;
