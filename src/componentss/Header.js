import React, { useContext } from "react";
import xnalogo from "./xnalogo.jpeg";
import i18n from "../i18n";
import LocaleContext from "../LocaleContext";
import { useTranslation } from "react-i18next";
import "../stylesheets/Header.css";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
import HeaderLogout from "./HeaderLogout";

export default function Header() {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);
  let navigate = useNavigate();
  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  if (
    Cookies.get("member_userr") == undefined ||
    Cookies.get("member_userr") == ""
  ) {
    return <HeaderLogout />;
  } else {
    return <HeaderLogin />;
  }
}
