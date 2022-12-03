import { Box, useMediaQuery } from "@mui/material";
import React from "react";
// import required modules
import { Autoplay, EffectFade, Lazy, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { $imageApi } from "../../api";
import styles from "../../styles/components/slider/banner.module.scss";
import { IBanner } from "../../types/IBanner";

interface Props {
  banners: IBanner[]
}

const BannerSlider: React.FC<Props> = ({ banners }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '"/>';
    },
  };

  return (
    <Box maxHeight={'576.98px'} mb={'16px'}>
      <Swiper
        spaceBetween={30}
        // loop={true}
        // slidesPerView={1}
        effect={"fade"}
        centeredSlides={true}
        lazy={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          // dynamicBullets: true,
          type: "bullets",
          clickable: true
        }}
        modules={[Autoplay, Lazy, EffectFade, Pagination, Navigation]}
        className={styles.mySwiper}
        style={{
          // @ts-ignore
          "--swiper-pagination-color": "#8a3ffc",
          "--swiper-navigation-color": "#8a3ffc",
        }}
      >
        {banners.map((banner, idx) => (
          <SwiperSlide className={styles.swiperSlide} key={idx}>
            <img src={`${$imageApi}/${isMobile ? banner.mobile_image : banner.image}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box >
  );
}

export default BannerSlider;
