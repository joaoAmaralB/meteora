import { Swiper, SwiperSlide } from 'swiper/react'
import style from './Banner.module.css'
import 'swiper/css'

function Banner() {
  return (
    <Swiper>
        <SwiperSlide className={style.swiper_image}>
            <img src="./Banners/Bannercarousel1_1440.png" alt="Banner image nº1" />
        </SwiperSlide>
        <SwiperSlide className={style.swiper_image}>
            <img src="./Banners/Bannercarousel2_1440.png" alt="Banner image nº2" />
        </SwiperSlide>
        <SwiperSlide className={style.swiper_image}>
            <img src="./Banners/Bannercarousel3_1440.png" alt="Banner image nº3" />
        </SwiperSlide>
    </Swiper>
  )
}

export default Banner