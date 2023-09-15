// rfc
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";
import TodoItemService from "../../services/TodoItemService";
import { Link } from "react-router-dom";
import TodoItemCreate from "./TodoItemCreate";

function TodoItemListTodo({ t, i18n, props }) {
  // Redirect
  let navigate = useNavigate();

  // State
  const [TodoItemStateService, setTodoItemStateService] = useState([]);

  // UseEffect
  useEffect(() => {
    TodoItemService.getAllTodo()
      .then((response) => {
        // console.log(response.data);
        setTodoItemStateService(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleChange = (checked) => {
    // console.log(checked.target.defaultChecked);
  };

  // GetAll
  const getAll = () => {
    TodoItemService.getAll()
      .then((response) => {
        // console.log(response.data);
        setTodoItemStateService(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // GetById
  const getById = (id) => {
    localStorage.setItem("todoItem_detail_id", id);
  };

  // Update
  const updateTodoItem = (data) => {
    let { id, description, complete, createdDate, modifiedDate } = data;
    localStorage.setItem("todoItem_update_id", id);
    localStorage.setItem("todoItem_update_description", description);
    localStorage.setItem("todoItem_update_complete", complete);
    localStorage.setItem("todoItem_update_created_date", createdDate);
    localStorage.setItem("todoItem_update_modified_date", modifiedDate);
  };

  // Delete
  const deleteTodoItem = (id) => {
    if (window.confirm("Want to delete?")) {
      TodoItemService.delete(id).then(() => {
        TodoItemService.getAllTodo();
      });
    } else {
      alert("Couldn't delete this task.");
    }
    navigate("/todoItem/list/done");
  };

  // DeleteAll
  const deleteAll = (willUncompletedTasksBeDeleted) => {
    if (window.confirm("Want to delete?")) {
      TodoItemService.deleteAll(willUncompletedTasksBeDeleted).then(() => {
        TodoItemService.getAllTodo();
      });
    } else {
      alert("Couldn't delete these tasks.");
    }
    navigate("/todoItem/list/todo");
  };

  return (
    <div>
      <TodoItemCreate />

      <h3 className="list-title">TodoList</h3>
      <div className="list-body">
        <div className="list-buttons-block">
          <Link to="todoItem/list" className="list-button btn btn-primary">
            All
          </Link>
          <Link to="todoItem/list/done" className="list-button btn btn-primary">
            Done
          </Link>
          <Link to="todoItem/list/todo" className="list-button btn btn-primary">
            Todo
          </Link>
        </div>

        <div className="todos-block">
          {TodoItemStateService.map((data) => (
            <div className={`todo-item item-${data.id}`} key={data.id}>
              {data.complete ? (
                <div className="todo-description done">{data.description}</div>
              ) : (
                <div className="todo-description">{data.description}</div>
              )}
              <div className="todo-actions">
                <input
                  className="todo-item-checkbox form-check-input"
                  type="checkbox"
                  checked={data.complete}
                  onChange={handleChange}
                />
                <Link to={`/todoItem/update/${data.id}`}>
                  <i
                    onClick={() => updateTodoItem(data)}
                    className="list-action-icon pen-icon fa-solid fa-pen"
                  ></i>
                </Link>
                <Link to={`/todoItem/delete/${data.id}`}>
                  <i
                    onClick={() => deleteTodoItem(data.id)}
                    className="list-action-icon fa-solid fa-trash text-danger"
                  ></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="delete-buttons-block">
          <Link
            to={`/todoItem/deleteall/${false}`}
            onClick={() => deleteAll(false)}
            className="delete-button btn btn-primary"
          >
            Delete done tasks
          </Link>
          <Link
            to={`/todoItem/deleteall/${true}`}
            onClick={() => deleteAll(true)}
            className="delete-button btn btn-primary"
          >
            Delete all tasks
          </Link>
        </div>
      </div>

      {/* Old Design */}
      {/* <Link to="todoItem/create" className="btn btn-primary"></Link>
      <table className="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th>{t("ID")}</th>
            <th>{t("Description")}</th>
            <th>{t("Created Date")}</th>
            <th>{t("Modified Date")}</th>
            <th>{t("Complete")}</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {TodoItemStateService.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.description}</td>
              <td>{data.createdDate}</td>
              <td>{data.modifiedDate}</td>
              <td>{data.complete.toString()}</td>

              <td>
                <Link to={`/todoItem/update/${data.id}`}>
                  <i
                    onClick={() => updateTodoItem(data)}
                    className="fa-solid fa-pen-to-square text-primary"
                  ></i>
                </Link>
              </td>

              <td>
                <Link to={`/todoItem/detail/${data.id}`}>
                  <i
                    onClick={() => getById(data.id)}
                    className="fa-solid fa-expand text-warning"
                  ></i>
                </Link>
              </td>

              <td>
                <Link to={`/todoItem/delete/${data.id}`}>
                  <i
                    onClick={() => deleteTodoItem(data.id)}
                    className="fa-solid fa-trash text-danger"
                  ></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default withTranslation()(TodoItemListTodo);
