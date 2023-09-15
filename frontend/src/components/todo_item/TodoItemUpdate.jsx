import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoItemService from "../../services/TodoItemService";
import { withTranslation } from "react-i18next";

function TodoItemUpdate({ t }) {
  // Redirect
  let navigate = useNavigate();

  // STATE
  const [todoItem, setTodoItem] = useState("");
  const [checked, setChecked] = React.useState(false);
  const [id, setId] = useState();

  const todoItemData = useParams();

  useEffect(() => {
    setId(todoItemData.id);
    TodoItemService.getById(todoItemData.id)
      .then((response) => {
        setTodoItem(response.data.description);
        setChecked(response.data.complete);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleChange = () => {
    setChecked(!checked);
  };

  const todoItemUpdate = async (event) => {
    event.preventDefault();

    const newTodoItem = JSON.parse(
      `{"description":"${todoItem}", "complete":${checked}}`
    );
    // console.log(newTodoItem);

    try {
      const response = await TodoItemService.update(id, newTodoItem);
      if (response.status === 200) {
        navigate("/todoItem/list");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form>
        <h2 className="display-3 mt-5">{t("Task update")}</h2>
        <div className="form-group mt-4">
          <input
            type="text"
            className="form-control"
            placeholder={t("Description")}
            required={true}
            autoFocus={true}
            id="todo_description"
            name="todo_description"
            onChange={(event) => {
              setTodoItem(event.target.value);
            }}
            value={todoItem}
          />
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="">
              Status
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-2 mb-5"
          onClick={todoItemUpdate}
        >
          {t("Update")}
        </button>
      </form>
    </div>
  );
}

export default withTranslation()(TodoItemUpdate);
