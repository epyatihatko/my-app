import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { sliderData } from 'src/mock'

import styles from './slider.module.scss'
import { SlideBlock } from './parts/slide'

export const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string): string {
      return `<span class="${className} ${styles.pag}"></span>`
    }
  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={pagination}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {sliderData.map((el: ISlideData, index: number) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <SlideBlock {...el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
