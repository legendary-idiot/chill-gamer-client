import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () => {
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
    <div className="slider-container max-w-5xl mx-auto">
      <Slider {...settings}>
        <div className="p-8 bg-emerald-300 text-black text-center">
          <h3>1</h3>
        </div>
        <div className="p-8 bg-emerald-300 text-black text-center">
          <h3>2</h3>
        </div>
        <div className="p-8 bg-emerald-300 text-black text-center">
          <h3>3</h3>
        </div>
        <div className="p-8 bg-emerald-300 text-black text-center">
          <h3>4</h3>
        </div>
        <div className="p-8 bg-emerald-300 text-black text-center">
          <h3>5</h3>
        </div>
        <div className="p-8 bg-emerald-300 text-black text-center">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default HeroBanner;
