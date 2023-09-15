import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class Header extends Component {
  static displayName = "TodoItem_Header";

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Header</div>;
  }
}

export default withTranslation()(Header);
