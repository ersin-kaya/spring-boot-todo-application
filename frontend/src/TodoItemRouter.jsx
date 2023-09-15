// rcc
import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default class TodoItemRouter extends Component {
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
        <Main />
        <Footer copyright="fa-regular fa-copyright" />
      </div>
    );
  }
}
