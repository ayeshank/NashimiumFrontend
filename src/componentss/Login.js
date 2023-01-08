import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../stylesheets/Login.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function Login() {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const [member, setMember] = useState({ memberno: "", password: "" });
  var name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setMember({ ...member, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { memberno, password } = member;
    const res = await fetch(
      "https://nashimiumbackend.herokuapp.com/memberlogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ memberno, password }),
      }
    );
    const data = await res.json();

    console.log("MEMBER LOGIN: ", data);
    if (res.status == 400) {
      alert("Member not found");
    } else if (res.status == 401) {
      alert("Password is Invalid");
    }
    //  else if(res.status == 422) {  alert("All field Are Required."); }
    else {
      Cookies.set("member_userr", memberno);
      window.alert("Successfully Login");
      navigate("/dashboard/member");
    }
  };
  return (
    <div className="login">
      <div className="login-header">
        <h5>{t("Login")} </h5>
      </div>
      <br />
      <Form style={{ textAlign: "left" }} onSubmit={postData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{t("Member No")}</Form.Label>
          <Form.Control
            type="text"
            name="memberno"
            placeholder="100245678231"
            value={member.memberno}
            onChange={handleInputs}
            required
          />
          <Form.Text className="text-muted">
            {t("Enter 12 digits Member Number")}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>{t("Password")}</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={member.password}
            onChange={handleInputs}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </Form.Group>
        {/* <Link to="/dashboard/member"><Button variant="success" style={{width:"100%"}} type="submit" onClick={postData}>{t('Login')}</Button></Link> */}
        <Button
          variant="success"
          style={{ width: "100%" }}
          type="submit"
          onClick={postData}
        >
          {t("Login")}
        </Button>

        <Form.Text className="text-muted">
          <Link to="/forgotpassword">{t("Forgot Password")}</Link>
        </Form.Text>
        <hr />
        <Button
          variant="secondary"
          onClick={() => navigate("/otp")}
          style={{ width: "100%" }}
        >
          {t("Create an Account")}
        </Button>
      </Form>
    </div>
  );
}
