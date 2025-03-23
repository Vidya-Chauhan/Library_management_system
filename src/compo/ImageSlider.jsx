import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://www.nituk.ac.in/frontEnd/uk/cse/cse_home.png", 
   " https://nituk.ac.in/frontEnd/uk/sa/sport.png",
    "https://nitkkr.ac.in/wp-content/uploads/2023/12/20201215_103621-1-1536x1152.jpg",
   "https://nituk.ac.in/frontEnd/uk/images/alumni/AL_4(1).png",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden mt-2">
   
      <img
        src={images[currentIndex]}
        alt="Slider"
        className="w-full h-full object-cover transition-all duration-500 rounded-lg"
      />

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

