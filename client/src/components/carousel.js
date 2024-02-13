import React from "react";
import ScrollCarousel from "scroll-carousel-react";
import "./Carousel.css";

const Carousel = () => {
  const imagePaths = [
    "/CarouselImages/cars.jpg",
    "/CarouselImages/dollhouse.jpg",
    "/CarouselImages/gamingconsoles.jpeg",
    "/CarouselImages/homeappliances.jpeg",
    // "/CarouselImages/hometheatersystems.jpeg",
    "/CarouselImages/mobiledevices.jpg",
    "/CarouselImages/refrigerators.jpeg",
    "/CarouselImages/householdappliances.jpg",
    "/CarouselImages/mobilephones.jpg",
    // "/CarouselImages/dollsanddollhouses.jpeg",
    "/CarouselImages/televisions.jpeg",
    "/CarouselImages/kitchenappliances.jpeg",
  ];

  const images = imagePaths.map((path, index) => ({
    key: index,
    Category_Image: path,
  }));

  return (
    <div className="main">
      <div>
        <ScrollCarousel
          autoplay
          autoplaySpeed={1}
          speed={1}
          onReady={() => console.log("I am ready")}
        >
          {images.map((image, index) => (
            <div key={index} className="imageMap">
              <img
                src={image.Category_Image}
                alt={`Image ${index}`}
                onError={(e) => console.log("Error loading image:", e.message)}
                className="image"
              />
            </div>
          ))}
        </ScrollCarousel>
      </div>
    </div>
  );
};

export default Carousel;
