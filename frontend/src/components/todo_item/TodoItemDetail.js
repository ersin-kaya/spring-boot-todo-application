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
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title"> {TodoItemDetailService.id}</h5>
          <p class="card-title"> {TodoItemDetailService.description}</p>
          <p class="card-text"> {TodoItemDetailService.createdDate}</p>
          <p class="card-text"> {TodoItemDetailService.modifiedDate}</p>
          <p class="card-text"> {TodoItemDetailService.complete.toString()}</p>
        </div>
      </div>
    </div>
  );
}
