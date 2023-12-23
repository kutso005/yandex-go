import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import gsap from 'gsap';
import "./Stores.css"

const Story = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const videos = document.querySelectorAll('.story__slide video');
    videos.forEach(video => {
      video.parentElement.setAttribute('data-swiper-autoplay', video.duration * 1000);
    });

    const slider = new Swiper(sliderRef.current, {
      speed: 1,
      watchSlidesProgress: true,
      loop: true,
      autoplay: {
        delay: 15000,
        disableOnInteraction: false
      },
      slidesPerView: 1,
      navigation: {
        nextEl: ".story__next",
        prevEl: ".story__prev",
      },
      pagination: {
        el: '.story__pagination',
        renderBullet: function (index, className) {
          return '<div class="' + className + '"> <div class="swiper-pagination-progress"></div> </div>';
        }
      },
      on: {
        autoplayTimeLeft(swiper, time, progress) {
          let currentSlide = document.querySelectorAll('.story__slider .swiper-slide')[swiper.activeIndex];
          let currentBullet = document.querySelectorAll('.story__slider .swiper-pagination-progress')[swiper.realIndex];
          let fullTime = currentSlide.dataset.swiperAutoplay ? parseInt(currentSlide.dataset.swiperAutoplay) : swiper.params.autoplay.delay;

          let percentage = Math.min(Math.max(parseFloat(((fullTime - time) * 100 / fullTime).toFixed(1)), 0)) + '%';

          gsap.set(currentBullet, { width: percentage });
        },
        transitionEnd(swiper) {
          let allBullets = document.querySelectorAll('.story__slider .swiper-pagination-progress');
          let bulletsBefore = Array.from(allBullets).slice(0, swiper.realIndex);
          let bulletsAfter = Array.from(allBullets).slice(swiper.realIndex, allBullets.length);
          if (bulletsBefore.length) { gsap.set(bulletsBefore, { width: '100%' }); }
          if (bulletsAfter.length) { gsap.set(bulletsAfter, { width: '0%' }); }

        
        },
      }
    });
  }, []);

  return (
    <div className="story">
      <div ref={sliderRef} className="story__slider swiper">
        <div className="story__wrapper swiper-wrapper">
          <div className="story__slide swiper-slide">
            <img src="https://picsum.photos/450/800" alt="" />
          </div>
          <div className="story__slide swiper-slide">
            <video autoPlay muted>
              <source src="https://exit109.com/~dnn/clips/RW20seconds_1.mp4#t=.1" type="video/mp4" />
            </video>
          </div>
          <div className="story__slide swiper-slide">
            <img src="https://picsum.photos/450/810" alt="" />
          </div>
        </div>

        <div className="story__next swiper-button-next"></div>
        <div className="story__prev swiper-button-prev"></div>

        <div className="story__pagination swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Story;
