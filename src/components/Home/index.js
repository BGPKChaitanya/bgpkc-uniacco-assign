import Header from "../Header";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Card from "../Card";
import { useRef } from "react";
import ButtonSlider from "../ButtonSlider";
import PlacesTravel from "../PlacesTravel";

const LocationsPlaces = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dwp6uyiir/image/upload/v1667717430/image_smbiyi.jpg",
    text: "Most popular around the world",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dwp6uyiir/image/upload/v1667717539/image_2_rpxmxj.jpg",
    text: "Fun for the family",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dwp6uyiir/image/upload/v1667717430/image_1_wl0xpf.jpg",
    text: "Great for team building",
  },
];

const Home = () => {
  const sliderRef = useRef();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  const goBack = () => {
    sliderRef.current.slickPrev();
  };

  const goNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <Header />
      <div className="home-outer">
        <div className="home">
          <h1 className="home-text">New this week</h1>
          <div>
            <MdArrowBackIosNew className="home-arrow" onClick={goBack} />
            <MdArrowForwardIos className="home-arrow" onClick={goNext} />
          </div>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {LocationsPlaces.map((each) => (
            <Card each={each} key={each.id} />
          ))}
        </Slider>
        <div className="filter">
          <ButtonSlider />
        </div>
        <PlacesTravel />
      </div>
    </div>
  );
};

export default Home;
