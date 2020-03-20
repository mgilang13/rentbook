import React, { Component } from "react";
import "./Login.css";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000/";
class Login extends Component {
  state = {
    username: "",
    password: "",
    token: "",
    id: ""
  };
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    this.props.history.push(token ? "/home" : "/");
  };
  login = () => {
    const { username, password } = this.state;
    const admin = {
      username,
      password
    };
    Axios.post("api/v1/admin/login", admin).then(res => {
      console.log("result result result", res.data.result.token);
      localStorage.setItem("token", res.data.result.token);
      localStorage.setItem("id", res.data.result.id);
      localStorage.setItem("keyword", "");

      this.props.history.push("/home");
      window.location.reload();
    });
  };
  enterPressed(event) {
    var code = event.keyCode || event.which;
    if (code === 13) {
      //13 is the enter keycode
      this.login();
    }
  }
  render() {
    console.log("token: ", localStorage.getItem("token"));
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
                <b>Login</b>
              </h1>
              <p>
                Welcome Back, Please Login
                <br />
                to your account
              </p>
            </div>
            <div className="formBody card p-2 shadow">
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
                  onKeyPress={this.enterPressed.bind(this)}
                  type="password"
                  className="form-control"
                  onChange={e => {
                    this.setState({
                      password: e.target.value
                    });
                  }}
                />
              </div>
              <form>
                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={this.login}
                >
                  Login
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

export default Login;
