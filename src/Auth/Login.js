import React, { Component } from "react";
import "./Login.css";
import Axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: "",
    token: "",
    id: ""
  };
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    this.props.history.push(token ? "/" : "/");
  };
  login = async () => {
    const { username, password } = this.state;
    const admin = {
      username,
      password
    };
    await Axios.post("api/v1/admin/login", admin).then(res => {
      this.setState({
        token: res.data.result.token,
        id: res.data.result.id
      });
    });
    localStorage.setItem("token", this.state.token);
    console.log('id', this.state.id)
    localStorage.setItem("id", this.state.id);
    this.props.history.push("/home");
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
                <b>Login</b>
              </h1>
              <p>
                Welcome Back, Please Login
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
                <submit
                  type="submit"
                  className="btn btn-dark"
                  onClick={this.login}
                >Submit </submit>
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
