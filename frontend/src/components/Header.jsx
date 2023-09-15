import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

class Header extends Component {
  static displayName = "TodoItem_Header";

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={`/todoItem/list`}>
                To Do List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/todoItem/create`}>
                Add a Todo!
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withTranslation()(Header);
