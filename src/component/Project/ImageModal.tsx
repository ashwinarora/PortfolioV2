import { imageDialog } from "./Data";
import { CgCloseO } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";

interface IImageModalProps {
  imageProps: imageDialog;
  onClose: () => void;
}

const ImageModal = ({ imageProps, onClose }: IImageModalProps) => {
  const { images } = imageProps;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-10/12 h-5/6 rounded-lg bg-white p-6 dark:bg-gray-800">
        <button
          className="absolute -right-5 -top-5 rounded-full p-1 text-gray-800 dark:text-gray-100"
          onClick={onClose}
        >
          <CgCloseO className="size-8 hover:text-red-500" />
        </button>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {images.map((image, imgIndex) => (
            <SwiperSlide key={imgIndex} className="flex justify-center items-center w-full h-full">
              <img
                src={image}
                alt={""}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageModal;
