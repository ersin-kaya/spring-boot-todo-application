import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class Footer extends Component {
  static displayName = "TodoItem_Footer";

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Footer</div>;
  }
}

export default withTranslation()(Footer);
