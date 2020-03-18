import { connect } from "react-redux";
import { deleteBook } from "../redux/actions/books";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import React, { Component } from "react";
import App from "../App";
import Axios from "axios";
import { Link } from "react-router-dom";
const idbook = localStorage.getItem("idbook");
const URL_STRING_DELETE_BOOK = "api/v1/book/deleteBook/" + idbook;

class DeleteBook extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state= {
  //         idbook:""
  //     }
  //   }
  deleteBook = async e => {
    e.preventDefault();
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    // this.setState({
    //   idbook: id
    // });
    // Axios.delete(URL_STRING_DELETE_BOOK, {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     Authorization: "Algernon",
    //     "User-token": id,
    //     "x-token": "barier " + token
    //   }
    // })
    //   .then(res => {
    //     // console.log(res);
    //     this.props.history.push("/home");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // console.log("props delete :", this.props);
    await this.props.dispatch(deleteBook());
    localStorage.removeItem("idbook");
    window.location.reload();
  };
  render() {
    return (
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete Data
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Delete this book?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <Link
                data-dismiss="modal"
                to="/viewBook"
                type="button"
                className="btn btn-warning"
                onClick={this.deleteBook}
              >
                Delete Data
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = book => {
  return {
    book
  };
};

export default connect(mapStateToProps)(DeleteBook);

// export default DeleteBook;
