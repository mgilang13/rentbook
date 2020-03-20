import { connect } from "react-redux";
import { getBookById } from "../redux/actions/books";
import { updateBook } from "../redux/actions/books";

import React, { Component } from "react";
import Axios from "axios";

// const idbook = localStorage.getItem("idbook");

// const URL_STRING_READ_BOOK = "api/v1/book/viewBook/" + idbook;
// const URL_STRING_UPDATE_BOOK = "api/v1/book/updateBook/" + idbook;
class EditBook extends Component {
  state = {
    title: "",
    author: "",
    description: "",
    image_url: "",
    date_released: "",
    id_genre: "",
    available: "",
    bookById: [],
    dataGenre: [],
    dataAvail: []
  };

  componentDidMount = () => {
    this.getBookById();
    this.viewGenre();
    this.viewAvail();
  };

  async getBookById() {
    // const id = localStorage.getItem("id");
    // const token = localStorage.getItem("token");

    // Axios.get(URL_STRING_READ_BOOK, {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     "Authorization": "Algernon",
    //     "User-token": id,
    //     "x-token": "barier " + token
    //   }
    // }).then(data => {
    //   this.setState({
    //     image_url: data.data.result[0].image_url,
    //     title: data.data.result[0].title,
    //     author: data.data.result[0].author,
    //     description: data.data.result[0].description,
    //     date_released: data.data.result[0].date_released.slice(0,10),
    //     id_genre: data.data.result[0].id_genre,
    //     available: data.data.result[0].available,
    //   });
    //   console.log(data.data.result[0].image_url);
    // });
    await this.props.dispatch(getBookById());
    console.log("props book", this.props.book);
    this.setState({
      id: this.props.book.book.bookData.result[0].id,
      image_url: this.props.book.book.bookData.result[0].image_url,
      title: this.props.book.book.bookData.result[0].title,
      author: this.props.book.book.bookData.result[0].author,
      description: this.props.book.book.bookData.result[0].description,
      date_released: this.props.book.book.bookData.result[0].date_released,
      id_genre: this.props.book.book.bookData.result[0].id_genre,
      available: this.props.book.book.bookData.result[0].available
    });
  }

  viewGenre = () => {
    Axios.get("api/v1/genre/").then(dataGenre => {
      this.setState({
        dataGenre: dataGenre.data.result
      });
      console.log("genre", this.state.dataGenre);
    });
  };

  viewAvail = () => {
    Axios.get("api/v1/avail/availCheck").then(dataAvail => {
      this.setState({
        dataAvail: dataAvail.data.result
      });
      console.log("available", this.state.dataAvail);
    });
  };

  updateBookData = e => {
    e.preventDefault();
    const {
      id,
      title,
      author,
      description,
      image_url,
      date_released,
      id_genre,
      available
    } = this.state;
    const book = {
      id,
      title,
      author,
      description,
      image_url,
      date_released,
      id_genre,
      available
    };
    // console.log("book data : ", book);
    // Axios.patch(URL_STRING_UPDATE_BOOK, book).then(res => {
    //   console.log(res);
    // });
    this.props.dispatch(updateBook(book));
    window.location.reload();
  };
  render() {
    const { dataGenre } = this.state;
    const { dataAvail } = this.state;
    console.log("state id genre", this.state.id_genre);
    return (
      <div
        key={this.state.id}
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Data
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
            <div className="modal-body">
              <form>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">URL Image</label>
                  <div className="col">
                    <input
                      type="text"
                      value={this.state.image_url}
                      className="form-control"
                      placeholder="Url Image"
                      onChange={e => {
                        this.setState({
                          image_url: e.target.value
                        });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Title</label>
                  <div className="col">
                    <input
                      type="text"
                      value={this.state.title}
                      className="form-control"
                      placeholder="Title"
                      onChange={e => {
                        this.setState({
                          title: e.target.value
                        });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Author</label>
                  <div className="col">
                    <input
                      type="text"
                      value={this.state.author}
                      className="form-control"
                      placeholder="Author"
                      onChange={e => {
                        this.setState({
                          author: e.target.value
                        });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Description</label>
                  <div className="col">
                    <input
                      type="text"
                      value={this.state.description}
                      className="form-control"
                      placeholder="Description"
                      onChange={e => {
                        this.setState({
                          description: e.target.value
                        });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Date Released
                  </label>
                  <div className="col">
                    {/* <input
                      type="text"
                      value={this.state.date_released}
                      className="form-control"
                      placeholder="Date Released"
                      onChange={e => {
                        this.setState({
                          date_released: e.target.value
                        });
                      }}
                    ></input> */}
                    <input
                      type="date"
                      className="form-control"
                      value={this.state.date_released.slice(0, 10)}
                      onChange={e => {
                        this.setState({
                          date_released: e.target.value
                        });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Genre</label>
                  <div className="col">
                    {/* <input
                      type="text"
                      value={this.state.id_genre}
                      className="form-control"
                      placeholder="Genre"
                      onChange={e => {
                        this.setState({
                          id_genre: e.target.value
                        });
                      }}
                    ></input> */}
                    <select
                      value={this.state.id_genre}
                      className="custom-select"
                      onChange={e => {
                        this.setState({
                          id_genre: e.target.value
                        });
                      }}
                    >
                      <option>Choose....</option>
                      {dataGenre.map(item => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Availability
                  </label>
                  <div className="col">
                    {/* <input
                      type="text"
                      value={this.state.available}
                      className="form-control"
                      placeholder="Availability"
                      onChange={e => {
                        this.setState({
                          available: e.target.value
                        });
                      }}
                    ></input> */}
                    <select
                      value={this.state.available}
                      className="custom-select"
                      onChange={e => {
                        this.setState({
                          available: e.target.value
                        });
                      }}
                    >
                      <option>Choose....</option>
                      {dataAvail.map(item => (
                        <option key={item.id} value={item.id}>
                          {item.status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                data-dismiss="modal"
                type="button"
                onClick={this.updateBookData}
                className="btn btn-warning text-white"
              >
                Save
              </button>
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
export default connect(mapStateToProps)(EditBook);
// export default EditBook;
