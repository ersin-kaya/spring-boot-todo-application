import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoItemService from "../../services/TodoItemService";
import { withTranslation } from "react-i18next";

function TodoItemCreate({ t }) {
  // Redirect
  let navigate = useNavigate();

  // STATE
  const [todoItem, setTodoItem] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    setError(undefined);
  }, [todoItem]);

  // Create
  const todoItemCreate = async (event) => {
    event.preventDefault();

    const newTodoItem = JSON.parse(`{"description":"${todoItem}"}`);

    setError(undefined);
    try {
      const response = await TodoItemService.add(newTodoItem);
      navigate("/todoItem/list");
    } catch (err) {
      setError(err.response.data.validationErrors);
    }
  };

  const todoItemOnChange = (event) => {
    const { description, value } = event.target;
    setTodoItem(value);
  };

  return (
    <div>
      <form>
        <h2 className="display-3 mt-4">{t("Add a Todo!")}</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder={t("Description")}
            required={true}
            autoFocus={true}
            id="todo_description"
            name="todo_description"
            onChange={todoItemOnChange}
          />
          {error ? (
            <div className="alert alert-danger" role="alert">
              {error.description}
            </div>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={!true}
          onClick={todoItemCreate}
        >
          {t("Add")}
        </button>
      </form>
    </div>
  );
}

export default withTranslation()(TodoItemCreate);
