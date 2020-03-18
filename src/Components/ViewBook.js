import { connect } from "react-redux";
import { getBookById } from "../redux/actions/books";
import React, { Component } from "react";
import "./viewBook.css";
import { FaArrowLeft } from "react-icons/fa";
import Axios from "axios";
import EditBookModal from "./EditBook";
import DeleteBookModal from "./DeleteBook";

import { Link } from "react-router-dom";

Axios.defaults.baseURL = "http://localhost:3001/";

const idbook = localStorage.getItem("idbook");
const URL_STRING = "api/v1/book/viewBook/" + idbook;

const URL_STRING_RENT = "api/v1/book/rentBook/" + idbook;

class ViewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookById: []
    };
  }
  componentDidMount = () => {
    console.log("idbook", idbook);
    if (idbook == null) {
      this.props.history.push("/home");
    } else {
      this.getBookById();
      // }
    }
  };

  rentBook() {
    const available = 1;
    Axios.patch(URL_STRING_RENT, available)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        if (err.response.status === 405) {
          alert("Book has Borrowed");
        }
      });
  }
  async getBookById() {
    console.log("id bookbyid", this.state.bookById);
    // if (this.state.bookById.length == 0) {
    //   this.props.history.push("/home");
    // } else {
    // Axios.get(URL_STRING, {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     Authorization: "Algernon",
    //     "User-token": id,
    //     "x-token": "barier " + token
    //   }
    // }).then(data => {
    //   this.setState({
    //     bookById: data.data.result
    //   });
    //   console.log(data);
    // });

    await this.props.dispatch(getBookById());
    console.log("props book", this.props.book);
    this.setState({
      bookById: this.props.book.book.bookData.result
    });
    // }
  }

  render() {
    const { bookById } = this.state;
    return (
      <div>
        <EditBookModal />
        <DeleteBookModal />
        {bookById.map(item => (
          <div key={item.id}>
            <div className="bannerImage">
              <div className="col-sm-5 menu row">
                <div className="col-sm-2">
                  <Link
                    to="/home"
                    className="btn rounded-circle btn-light backButton mt-3 ml-3"
                  >
                    <FaArrowLeft />
                  </Link>
                </div>
                <div className="col-sm-3 d-flex align-items-end editDelete">
                  <Link
                    to="/editBook"
                    data-toggle="modal"
                    data-target="#editModal"
                  >
                    Edit
                  </Link>
                  <Link
                    to="/deleteBook"
                    data-toggle="modal"
                    data-target="#deleteModal"
                  >
                    Delete
                  </Link>
                </div>
              </div>
              <img
                className="bigBanner"
                alt="Banner"
                src={require("../Assets/Images/" + item.image_url)}
              />
              <img
                className="shadow-lg float-right smallBanner mr-5"
                alt="Small Banner"
                src={require("../Assets/Images/" + item.image_url)}
              />
            </div>
            <div className="row mt-4 col mainContent">
              <div className="col-md-9 content row">
                <div className="col-sm-7">
                  <div className="d-flex">
                    <h4 className="flag flex-wrap pl-2 pr-2 pt-1 pb-1 rounded">
                      {item.genre}
                    </h4>
                  </div>
                  <h2>
                    <strong>{item.title}</strong>
                  </h2>
                  <p>
                    <strong>{item.date_released.slice(0, 10)}</strong>
                  </p>
                </div>
                <script>console.log("hai")</script>
                <div className="col-sm-5 pr-5">
                  <h2 id="available" align="right" className="mt-5 text-danger">
                    {item.availability}
                  </h2>
                </div>
                <div className="d-flex pr-5">
                  <p className="flex-wrap contentText">{item.description}</p>
                </div>
              </div>
              <div className="col d-flex">
                <button
                  className="col btn btn-lg btn-warning align-self-end text-white"
                  onClick={this.rentBook}
                >
                  <strong>Borrow</strong>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = book => {
  return {
    book
  };
};
export default connect(mapStateToProps)(ViewBook);

// export default ViewBook;
