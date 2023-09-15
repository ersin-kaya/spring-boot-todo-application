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
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#" aria-current="page">
                {/* <i class={this.props.bars}></i> */}
                To Do List
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
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
