import React, { Component } from "react";
import "./Login.css";
import Axios from "axios";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };
  register = () => {
    const { username, password } = this.state;
    const admin = {
      username,
      password
    };
    Axios.post("api/v1/admin/register", admin).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-lg-8">
          <img
            alt="Main Banner"
            className="mainBanner"
            src={require("../Assets/Images/main.jpg")}
          />
        </div>
        <div className="col-lg-4">
          <div className="col row mt-2">
            <img
              className="ml-auto"
              width="52px"
              alt="Icon Library"
              src={require("../Assets/Images/library-icon.png")}
            />
          </div>
          <div className="container formLogin">
            <div className="formTitle">
              <h1>
                <b>Register</b>
              </h1>
              <p>
                Welcome Back, Please Register
                <br />
                to your account
              </p>
            </div>
            <div className="formBody card p-2 shadow">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => {
                      this.setState({
                        username: e.target.value
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={e => {
                      this.setState({
                        password: e.target.value
                      });
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={this.register}
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div className="mt-2 row col">
              <p className="mr-auto">
                <input type="checkbox" />
                Remember Me
              </p>
              <a href="/#" className="text-dark ml-auto">
                <b>Forgot Password</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
