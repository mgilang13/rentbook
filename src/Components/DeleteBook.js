import React, { Component } from "react";
import Axios from "axios";

const idbook = localStorage.getItem('idbook');
const URL_STRING_DELETE_BOOK = "api/v1/book/deleteBook/"+idbook;
class DeleteBook extends Component {


deleteBook() {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    Axios.delete(URL_STRING_DELETE_BOOK, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Algernon",
            "User-token": id,
            "x-token": "barier " + token
          }
    }).then(res => {
        console.log(res)
        this.props.history.push("/home")
    })
    .catch(err => {
        console.log(err)
    })

}
    render() {
        return (
            <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Delete Data</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    Delete this book?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button href="/home" type="button" className="btn btn-warning" onClick={this.deleteBook}>Delete Data</button>
                </div>
                </div>
            </div>
            </div>
        );
    }
}
export default DeleteBook;
