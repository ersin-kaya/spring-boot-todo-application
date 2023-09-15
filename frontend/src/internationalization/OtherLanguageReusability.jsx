//rfc => React Function Component.
//rcc => React Class Component.
//rsc => React Stateles Component (state olmayan).
import React from "react";

//TR import edelim
import tr from "../img/flag/tr.png";
import en from "../img/flag/en.png";

// Dil secenegi
import { withTranslation } from "react-i18next";
import OtherLanguageServices from "./OtherLanguageServices";
import { Link } from "react-router-dom";

//Fonksiyon komponent
function OtherLanguageReusability(props) {
  //Bayraklar
  const internationalizationLanguage = (language) => {
    const { i18n } = props;
    i18n.changeLanguage(language);
    OtherLanguageServices.headerLanguageServices(language);
  };

  //render
  return (
    <React.Fragment>
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link
            className="nav-link"
            to=""
            onClick={() => internationalizationLanguage("tr")}
          >
            <img src={tr} style={{ height: "20px" }} alt="TR" />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to=""
            onClick={() => internationalizationLanguage("en")}
          >
            <img src={en} style={{ height: "15px" }} alt="EN" />
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

// export default UserRegister
export default withTranslation()(OtherLanguageReusability);
