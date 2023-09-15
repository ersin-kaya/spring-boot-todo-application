// rcc
import React, { Component } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import TodoItemList from "./components/todo_item/TodoItemList";
import TodoItemCreate from "./components/todo_item/TodoItemCreate";
import TodoItemUpdate from "./components/todo_item/TodoItemUpdate";
import TodoItemDetail from "./components/todo_item/TodoItemDetail";

import { Routes, Route, Navigate } from "react-router-dom";

import { withTranslation } from "react-i18next";

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
            <Route path="/" element={<TodoItemList />} />
            <Route path="/todoItem/list" element={<TodoItemList />} />
            <Route path="/todoItem/create" element={<TodoItemCreate />} />
            <Route path="/todoItem/update/:id" element={<TodoItemUpdate />} />
            <Route path="/todoItem/detail/:id" element={<TodoItemDetail />} />

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
