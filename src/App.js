import React, { Component } from "react";
import Axios from "axios";
import Topbar from "./Components/Topbar";
import "./App.css";
import Slider from "./Components/mainSlider";
import AddBookModal from "./Components/AddBook";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewBook from "./Components/ViewBook";

const URL_STRING = "api/v1/book?page=1";
class App extends Component {
  state = {
    library: [],
    idbook:''
  };

  componentDidMount = () => {
    this.getDataBook();
  };

  getDataBook() {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    Axios.get(URL_STRING, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Algernon",
        "User-token": id,
        "x-token": "barier " + token
      }
    }).then(data => {
      this.setState({
        library: data.data.data
      });
      console.log(data);
    });
  }

  viewBookById(id) {
    localStorage.setItem('idbook', id);
  }

  logout = () => {
    localStorage.clear('token');
    this.props.history.push('/')
  }
  render() {
    const { library } = this.state;
  
  // function refreshPage() {
  //   window.location.reload(false);
  // }
    return (
        <div className="d-flex toggled" id="wrapper">
          <div className="bg-light border-right" id="sidebar-wrapper">
            <img
              alt="Gambar Admin"
              className="rounded m-5"
              width="100px"
              src={require("./Assets/Images/person.png")}
            />
            <h4 className="ml-3">Muhammad Gilang</h4>
            <div className="list-group list-group-flush mt-5">
              <a
                href="/#"
                className="list-group-item list-group-item-action bg-light"
              >
                <b>Explore</b>
              </a>
              <a
                href="/#"
                className="list-group-item list-group-item-action bg-light"
              >
                <b>History</b>
              </a>
              <a
                href="/#"
                className="list-group-item list-group-item-action bg-light"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <b>Add Book*</b>
              </a>
              <a
                href="/#"
                className="list-group-item list-group-item-action bg-light"
                onClick={this.logout}
              >
                <b>Logout</b>
              </a>
            </div>
          </div>
          <AddBookModal />
          <div id="page-content-wrapper">
            <Topbar />
            <Slider dataFromBook={this.state.library} />
            <div className="container mt-5">
              <h3>List Book</h3>
              <div className="d-flex flex-wrap justify-content-center">
                {library === undefined ? (
                  <div>Data kosong</div>
                ) : (
                  library.map(item => (
                    <div
                    key={item.id}
                    className="shadow mycard card ml-1 mb-4 mr-2 "
                    >
                    <a onClick={() => this.viewBookById(item.id)} className="stretched-link" href="api/v1/book/viewBook/"></a>
                        <img
                          className="bookImage"
                          src={require("./Assets/Images/" + item.image_url)}
                          alt="This is book"
                        />
                        <h5 className="card-title">{item.title}</h5>
                        <div className="card-body">
                          <p className="card-text">{item.description}</p>
                        </div>
                      </div>
                  ))
                  )}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
