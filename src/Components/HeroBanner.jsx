import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const HeroBanner = () => {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    fetch("../TopGamesBanner.json")
      .then((response) => response.json())
      .then((data) => setCardsData(data));
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-10/12 sm:max-w-4xl mx-auto my-8">
      <Slide delay={100} duration={2000} triggerOnce>
        <Slider {...settings}>
          {cardsData.map((card, idx) => {
            return (
              <div
                key={idx}
                className="p-2 text-black text-center cursor-pointer hover:scale-105"
              >
                <Link to={card.address} className="block" target="_blank">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-[280px] object-cover rounded-md"
                  />
                  <h3 className="text-2xl font-bold text-emerald-500 mt-2">
                    {card.title}
                  </h3>
                  <p className="text-base-content">{card.description}</p>
                </Link>
              </div>
            );
          })}
        </Slider>
      </Slide>
    </div>
  );
};

export default HeroBanner;
