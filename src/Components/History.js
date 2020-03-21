import { connect } from "react-redux";
import { getAllBookReturn, returnBookProcess } from "../redux/actions/books";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./History.css";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      library: [],
      idbook: ""
    };
  }

  componentDidMount = () => {
    this.getDataBookReturn();
  };

  getDataBookReturn = async () => {
    await this.props.dispatch(getAllBookReturn());
    console.log("librarrrry: ", this.props.book.book.bookData.result);
    this.setState({
      library: this.props.book.book.bookData.result
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.idbook !== this.state.idbook) {
      this.returnBook();
    }
  };

  returnBook = () => {
    console.log("idbook", this.state.idbook);
    this.props.dispatch(returnBookProcess(this.state.idbook));
  };
  render() {
    const { library } = this.state;
    console.log("idbook", this.state.idbook);
    console.log("library: ", library);
    return (
      <div className="container mt-5">
        <h3>List Own Book</h3>
        <Link to="/home" className="btn btn-primary">
          Back
        </Link>
        <div className="list-group">
          {library === undefined || library.length === 0 ? (
            <div>Data kosong</div>
          ) : (
            library.map(item => (
              <div
                key={item.id}
                className="accordion shadow mb-4 p-4 border"
                id="accordionExample"
              >
                <div
                  className="row list-group-item list-group-item-light list-group-item-action pb-4"
                  data-toggle="collapse"
                  data-target={"#demo" + item.id}
                >
                  <strong>{item.title}</strong>
                </div>
                <button
                  className="btn btn-warning text-light float-right btn-return"
                  onClick={() =>
                    this.setState({
                      idbook: item.id
                    })
                  }
                >
                  Return
                </button>
                <div id={"demo" + item.id} className="collapse">
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <th scope="row" width="100px">
                          Book Cover
                        </th>
                        <td>
                          <img
                            className="rounded imgbook"
                            src={require("../Assets/Images/" + item.image_url)}
                            alt="mycover"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" width="100px">
                          Title
                        </th>
                        <td>{item.title}</td>
                      </tr>
                      <tr>
                        <th scope="row" width="100px">
                          Author
                        </th>
                        <td>{item.author}</td>
                      </tr>
                      <tr>
                        <th scope="row" width="100px">
                          Description
                        </th>
                        <td>{item.description}</td>
                      </tr>
                      <tr>
                        <th scope="row" width="100px">
                          Date Released
                        </th>
                        <td>{item.df}</td>
                      </tr>
                      <tr>
                        <th scope="row" width="100px">
                          Genre
                        </th>
                        <td>{item.name}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          )}
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
export default connect(mapStateToProps)(History);
