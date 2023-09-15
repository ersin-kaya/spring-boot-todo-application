import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class Footer extends Component {
  static displayName = "TodoItem_Footer";

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer bg-dark text-light text-center text-lg-start">
          <div className="text-center p-4">
            <i className={this.props.copyright}></i> 2023
          </div>
        </footer>
      </div>
    );
  }
}

export default withTranslation()(Footer);
