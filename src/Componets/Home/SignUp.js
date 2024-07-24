import React from "react";
import { useState } from "react";
import "./Styles/form.css";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState();
  const [nameErr, setNameErr] = useState(false);
  const [password, setPassword] = useState();
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordMatchErr, setPasswordMatchErr] = useState(false);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  function NameHandler(e) {
    const item = e.target.value;
    if (item.length < 4) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    setName(item);
  }
  function PasswordHandler(e) {
    const pass = e.target.value;
    if (pass.length < 6) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(pass);
  }
  function PasswordMatch(e) {
    let pass = document.getElementById("pass").value;
    let passwordd = document.getElementById("password").value;
    if (pass != passwordd) {
      setPasswordMatchErr(true);
    } else {
      setPasswordMatchErr(false);
    }
  }
  function submitHandler(sub) {

    {
      sub.preventDefault();
      let pass = document.getElementById("pass").value;
      let passwordd = document.getElementById("password").value;
      try {
        if (
          name === undefined ||
          password === undefined ||
          name === "" ||
          password === ""
        ) {
          throw "Please entert All required  detailes !";
        }
        if (name.length < 4 || password.length < 6 || pass != passwordd) {
          throw "Please Enter Vallid detailes !";
        } else {
          throw "Sucessfully registerd";
        }
      } catch (Erorr) {
        alert(Erorr);
      }
    }
  }
  function Show(e) {
    {
      e.preventDefault(e);
      setShow(!show);
    }
  }
  function ShowMatch(e) {
    {
      e.preventDefault(e);
      setVisible(!visible);
    }
  }
  return (
    <div className="Signup_container">
      <form onSubmit={submitHandler} className="SignUp_card">
        <h2>Register</h2>
        <div>
          <input type="text" placeholder="Name" onChange={NameHandler} />
          {nameErr ? <span className="Err">!</span> : null}
        </div>
        {/* .....Email....... */}

        <div>
          <input type="email" placeholder="Mail Id" />
        </div>
        {/* ......Password........ */}

        <div>
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={PasswordHandler}
            id="pass"
            className="sginput"
          />
          <label onClick={Show} className="eye">
            {show ? <FaEyeSlash /> : <FaRegEye />}
          </label>
          {passwordErr ? <span className="PassErr">!</span> : null}
        </div>
        {/* ......Confirm password..... */}

        <div>
          <input
            type={visible ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={PasswordMatch}
            id="password"
            className="sginput"
          />
          <label onClick={ShowMatch} className="eye">
            {visible ? <FaEyeSlash /> : <FaRegEye />}
          </label>
          {passwordMatchErr ? <span className="PassErr">!</span> : null}
          <h4 id="passwordshow"></h4>
          {/* .......Toggle btn..... */}
        </div>
        {/* .....Submit Btn..... */}
        <button type="submit" id="signupbtn">
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp;
