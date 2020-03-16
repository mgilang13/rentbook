import React, { Component } from "react";
import Axios from "axios";
import Topbar from "./Components/Topbar";
import "./App.css";
import Slider from "./Components/mainSlider";
import AddBookModal from "./Components/AddBook";

const URL_STRING = "api/v1/book?page=1";
const id = localStorage.getItem("id");
const token = localStorage.getItem("token");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      library: [],
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Algernon",
        "User-token": id,
        "x-token": "barier " + token
      }
    };
  }
  
  componentDidMount = () => {
    if(localStorage.getItem("token") == null){
      this.props.history.push('/')
    } else {
      this.getDataBook();
    }
  };
  
  getDataBook() {
   
  
    Axios.get(URL_STRING, {
    headers: this.state.headers
    }).then(data => {
      this.setState({
        library: data.data.data
      });
    }); 
    
  }

  
  viewBookById(id) {
    localStorage.setItem('idbook', id);
  }

  logout = () => {
    localStorage.clear('token');
    localStorage.clear('id');
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
                href="/"
                className="list-group-item list-group-item-action bg-light"
                onClick={this.logout}
              >
                <b>Logout</b>
              </a>
            </div>
          </div>
          <AddBookModal dataHeader = {this.state.headers}/>
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
                       {/* eslint-disable-next-line */}
                    <a onClick={() => this.viewBookById(item.id)} className="stretched-link" href="/viewBook/"></a>
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
