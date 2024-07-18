import React from "react";
import Slider, { Settings } from "react-slick";
// import "./Sliders.css";

// Define the types for the props and slider data
interface SlideData {
  image: string;
  name: string;
}

interface SlidersProps {
  sliderData: SlideData[];
}

// Define the types for the arrow components props
interface ArrowProps {
  currentSlide?: number;
  slideCount?: number;
  className?: string;
  onClick?: () => void;
}

// Arrow components with proper type annotations
const GalleryPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="custom-prevArrow" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  </div>
);

const GalleryNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="custom-nextArrow" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
    </svg>
  </div>
);



const Sliders: React.FC<SlidersProps> = ({ sliderData }) => {
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  const settings: Settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
  };

  return (
    <Slider {...settings}>
      {sliderData.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt="slider" className="image" />
          <span>{slide.name}</span>
        </div>
      ))}
    </Slider>
  );
};

export default Sliders;

