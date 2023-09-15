import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoItemService from "../../services/TodoItemService";
import notebook from "../../images/notebook.jpg";

export default function TodoItemDetail() {
  // Redirect
  let navigate = useNavigate();

  // State
  const [TodoItemDetailService, setTodoItemDetailService] = useState([]);
  const [id, setID] = useState(null);

  const todoItemId = useParams();

  // UseEffect
  useEffect(() => {
    setID(localStorage.getItem("todoItem_detail_id"));
    TodoItemService.getById(todoItemId.id)
      .then((response) => {
        // console.log(response.data);
        setTodoItemDetailService(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title"> {TodoItemDetailService.id}</h5>
          <p className="card-title"> {TodoItemDetailService.description}</p>
          <p className="card-text"> {TodoItemDetailService.createdDate}</p>
          <p className="card-text"> {TodoItemDetailService.modifiedDate}</p>
          <p className="card-text"> {TodoItemDetailService.complete + ""}</p>
        </div>
      </div>
    </div>
  );
}
