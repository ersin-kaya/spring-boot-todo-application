// axios
import axios from "axios";

const todoItemUrl = "/api/v1";

class TodoItemService {
  // /getall
  getAll() {
    return axios.get(`${todoItemUrl}/getall`);
  }

  // /getbyid/id
  getById(id) {
    return axios.get(`${todoItemUrl}/getbyid/${id}`);
  }

  // /add
  add(todoItem) {
    return axios.post(`${todoItemUrl}/add`, todoItem);
  }

  // /update/id
  update(id, todoItem) {
    return axios.post(`${todoItemUrl}/update/${id}`, todoItem);
  }

  // /delete/id
  delete(id) {
    return axios.post(`${todoItemUrl}/delete/${id}`);
  }

  // /deleteall/willUncompletedTasksBeDeleted
  deleteAll(willUncompletedTasksBeDeleted) {
    return axios.post(
      `${todoItemUrl}/deleteall/${willUncompletedTasksBeDeleted}`
    );
  }
}

export default new TodoItemService();
