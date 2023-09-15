// rfc
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";
import TodoItemService from "../../services/TodoItemService";
import { Link } from "react-router-dom";

function TodoItemList({ t, i18n, props }) {
  // Redirect
  let navigate = useNavigate();

  // State
  const [TodoItemStateService, setTodoItemStateService] = useState([]);

  // UseEffect
  useEffect(() => {
    TodoItemService.getAll()
      .then((response) => {
        // console.log(response.data);
        setTodoItemStateService(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
        getAll();
      });
    } else {
      alert("Couldn't delete this task.");
    }
    navigate("/todoItem/list");
  };

  return (
    <div>
      {/* <Link to="todoItem/create" className="btn btn-primary"></Link> */}
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
      </table>
    </div>
  );
}

export default withTranslation()(TodoItemList);
