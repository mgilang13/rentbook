import "./mainSlider.css";
import React from "react";
import Slider from "./Slider.js";

class mainSlider extends React.Component {
  render() {
    const dataBook = this.props.dataFromBook;
    return (
      <div className="carousel m-3 ml-5 mr-5 mt-4">
        <div style={{ display: "flex", justifyContent: "space-between" }} />

        <Slider
          options={{
            pauseAutoPlayOnHover: true,
            wrapAround: true
          }}
        >
          {dataBook.map((item) => (
            <div className="slider" key={item.id}>
              <img src={require("../Assets/Images/" + item.image_url)} alt="" />
              <h5 className="sliderTitle">{item.title}</h5>
              <h5 className="sliderAuthor">Author {item.author}</h5>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default mainSlider;
