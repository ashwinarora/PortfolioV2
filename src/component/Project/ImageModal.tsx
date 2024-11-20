import { imageDialog } from "./Data";
import { CgCloseO } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface IImageModalProps {
  imageProps: imageDialog;
  onClose: () => void;
}

const ImageModal = ({ imageProps, onClose }: IImageModalProps) => {
  const { images } = imageProps;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative size-9/12 rounded-lg bg-white p-6 dark:bg-gray-800">
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
          className="size-11/12  "
        >
          {images.map((image, imgIndex) => (
            <SwiperSlide key={imgIndex} className="w-full">
              <img
                src={image}
                alt={""}
                className={`w-full `}
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
