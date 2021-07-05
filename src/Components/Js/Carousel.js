import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "../Css/Carousel.css"


export default class SimpleSlider extends React.Component {
    render() {
      const settings = {
        dots: true,
        autoplay: true,
        cssEase: 'ease-in',
        infinite: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                fade: true,
                cssEase: 'linear'  
              }
            },
            {
              breakpoint: 530,
              settings: {
                fade: true,
                cssEase: 'linear'              }
            },
            {
              breakpoint: 480,
              settings: { 
                fade: true,
                cssEase: 'linear'
              }
            }]
      };
      return (
        <div id="Container-Slider">
          
            <div className="Container-Slider-Child">

            <Slider {...settings}>
                
                <div className="Slider-Img" id="Slider-Img1">
                <h3></h3>
                </div>

                <div className="Slider-Img" id="Slider-Img2">
                <h3></h3>
                </div>

                <div className="Slider-Img" id="Slider-Img3">
                <h3></h3>
                </div>

                <div className="Slider-Img" id="Slider-Img4">
                <h3></h3>
                </div>

                <div className="Slider-Img" id="Slider-Img5">
                <h3></h3>
                </div>

                <div className="Slider-Img" id="Slider-Img6">
                <h3></h3>
                </div>

                <div className="Slider-Img" id="Slider-Img7">
                <h3></h3>
                </div>

                <div className="Slider-Img" id="Slider-Img8">
                <h3></h3>
                </div>                                
            
            </Slider>

            </div>
          
        </div>
      );
    }
  }

  ReactDOM.render(
    <SimpleSlider />,
    document.getElementById("root")
  );