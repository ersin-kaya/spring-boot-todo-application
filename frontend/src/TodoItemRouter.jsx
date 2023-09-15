// rcc
import React, { Component } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { TodoItemList } from "./components/todo_item/TodoItemList";
import { TodoItemCreate } from "./components/todo_item/TodoItemCreate";
import { TodoItemUpdate } from "./components/todo_item/TodoItemUpdate";
// import {TodoItemView} from "./components/todo_item/TodoItemView";

import { Routes, Route } from "react-router-dom";

class TodoItemRouter extends Component {
  static displayName = "TodoItem_Router";

  constructor(props) {
    super(props);
    this.state = {};
  }

  //   componentDidMount() {}

  render() {
    return (
      <div>
        <Header bars="fa-solid fa-bars" />

        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/todoItem/list" element={TodoItemList} />
            <Route path="/todoItem/create" element={TodoItemCreate} />
            <Route path="/todoItem/udpate:id" element={TodoItemUpdate} />
            {/* <Route path="/todoItem/view/:id" element={TodoItemView} /> */}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        <Footer copyright="fa-regular fa-copyright" />
      </div>
    );
  }
}

// Higher-Order Component
export default withTranslation()(TodoItemRouter);
