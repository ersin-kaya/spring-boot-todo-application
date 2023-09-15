import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class Header extends Component {
  static displayName = "TodoItem_Header";

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page">
                {/* <i className={this.props.bars}></i> */}
                To Do List
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Add a task
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withTranslation()(Header);
