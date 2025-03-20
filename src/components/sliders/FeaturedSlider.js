import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, A11y, Autoplay } from "swiper";
import { displayMoney } from "../../helpers/utils";
import productsData from "../../data/productsData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import "swiper/scss/effect-coverflow";


const FeaturedSlider = () => {
  const featuredProducts = productsData.filter(
    (item) => item.tag === "featured-product"
  );

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="featured_products_container"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Swiper
        modules={[EffectCoverflow, Pagination, A11y, Autoplay]}
        loop={true}
        speed={400}
        spaceBetween={100}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        effect={"coverflow"}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 70,
          modifier: 3,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 200
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 250
          },
        }}
        className="featured_swiper"
      >
        {featuredProducts.map((item) => {
          const { id, images, title, finalPrice, originalPrice, path } = item;
          const newPrice = displayMoney(finalPrice);
          const oldPrice = displayMoney(originalPrice);

          return (
            <SwiperSlide key={id}>
              <motion.div className="featured_card" variants={cardVariants}>
                <div className="featured_title">{title}</div>
                <figure className="featured_img">
                  <img src={images[0]} alt="" />
                </figure>
                <h2 className="products_price">
                  {newPrice} &nbsp;
                  <small>
                    <del>{oldPrice}</del>
                  </small>
                </h2>
                <Link to={`${path}${id}`}>
                  <button className="view_button">View</button>
                </Link>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default FeaturedSlider;