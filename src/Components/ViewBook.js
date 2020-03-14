import React, { Component } from "react";
import "./viewBook.css";
import { FaArrowLeft } from "react-icons/fa";
import Axios from "axios";

import {Link} from 'react-router-dom';

class ViewBook extends Component {
  state={
    bookById:[]
  }
  componentDidMount = () => {
    this.getBookById();
  };

  getBookById() {
    const idbook = localStorage.getItem("idbook");
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token")

    const URL_STRING = idbook;

    Axios.get(URL_STRING, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Algernon",
        "User-token": id,
        "x-token": "barier " + token
      }
    }).then(data => {
      this.setState({
        bookById: data.data.result
      });
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <div className="bannerImage">
          <Link to="/home" className="btn rounded-circle btn-light backButton mt-3 ml-3">
            <FaArrowLeft />
          </Link>
          <img
            className="bigBanner"
            alt="Banner"
            src={require("../Assets/Images/charlie.JPG")}
          />
          <img
            className="shadow-lg float-right smallBanner mr-5"
            alt="Small Banner"
            src={require("../Assets/Images/charlie.JPG")}
          />
        </div>
        <div className="row mt-4 col mainContent">
          <div className="col-md-9 content row">
            <div className="col-sm-9">
              <div className="d-flex">
                <h4 className="flag flex-wrap pl-2 pr-2 pt-1 pb-1 rounded">
                  Novel
                </h4>
              </div>
              <h2>
                <strong>Charlie Si Jenius Dungu</strong>
              </h2>
              <p>
                <strong>03 Desember 2020</strong>
              </p>
            </div>
            <div className="col-sm-3 pr-5">
              <h2 align="right" className="mt-5 text-success">
                Available
              </h2>
            </div>
            <div className="d-flex pr-5">
              <p className="flex-wrap contentText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="col d-flex">
            <button className="col btn btn-lg btn-warning align-self-end text-white">
              <strong>Borrow</strong>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewBook;
