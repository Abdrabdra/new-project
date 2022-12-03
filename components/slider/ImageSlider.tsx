import { Box, Paper, useMediaQuery } from "@mui/material";
import React from "react";
// import required modules
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../styles/components/slider/image.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { $imageApi } from "../../api";
import { IPhoto } from "../../types/IProduct";

interface Props {
  photos: IPhoto[]
}

const ImageSlider: React.FC<Props> = ({ photos }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

  return (
    <Box className={styles.wrapper}>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        lazy={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        className={styles.mySwiper2}
        style={{
          // @ts-ignore
          "--swiper-pagination-color": "#8a3ffc",
          "--swiper-navigation-color": "#8a3ffc"
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {photos.map((photo, idx) => (
          <SwiperSlide className={styles.swiperSlide} key={idx}>
            <img src={`${$imageApi}/${photo.image}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper}
      >
        {photos.map((photo, idx) => (
          <SwiperSlide
            className={styles.swiperSlide}
            key={idx}
          >
            <img src={`${$imageApi}/${photo.image}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default ImageSlider;
