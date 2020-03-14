import React, { Component } from "react";
import Axios from "axios";

class AddBook extends Component {
  state = {
    title: "",
    author: "",
    description: "",
    image_url: "",
    date_released: "",
    id_genre: "",
    available: ""
  };
  addBookData = () => {
    const {
      title,
      author,
      description,
      image_url,
      date_released,
      id_genre,
      available
    } = this.state;
    const book = {
      title,
      author,
      description,
      image_url,
      date_released,
      id_genre,
      available
    };
    Axios.post("api/v1/book/addBook", book).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Data
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Date Released"
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Genre"
                      onChange={e => {
                        this.setState({
                          id_genre: e.target.value
                        });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Availability
                  </label>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Availability"
                      onChange={e => {
                        this.setState({
                          available: e.target.value
                        });
                      }}
                    ></input>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={this.addBookData}
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

export default AddBook;
