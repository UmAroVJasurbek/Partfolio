import { Link } from "react-router-dom";
import "./Products.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Products.scss";
import { Pagination } from "swiper/modules";
import patek from "../../db/resource";
const Products = () => {
  return (
    <section className="products" id="products" role="selection">
      <div className="products__wrapper">
        <h3 className="products__title">
          Patek Philippe <span>Watches</span>
        </h3>
        <Swiper
          slidesPerView={8}
          spaceBetween={42}
          pagination={{
            clickable: true,
          }}
          
          breakpoints={{
            375: {
                slidesPerView: 1.5,
            },
            500:{
              slidesPerView: 2.5
            },
            700:{
                slidesPerView: 3.5
            },
            900:{
                slidesPerView: 4.5
            },
            1000:{
                slidesPerView: 5.5
            },
            1200:{
                slidesPerView: 6.5
            },
            1300:{
                slidesPerView: 7.5
            },
            1400:{
                slidesPerView: 8
            }
          }}
          modules={[Pagination]}
          className="products__list"
        >
        { patek.map((collection) => {
          const {title, pathname, main_image,products,model_code} = collection
          return (
            <SwiperSlide key={pathname}>
            <Link to={`/collection/${pathname}`} className="product__wrapper">
              <div className="product">
                <img src={main_image} alt="" />
                <p>{title}</p>
                <p className="link link--outline">{products.length} models</p>
                <p>{model_code}</p>
              </div>
            </Link>
          </SwiperSlide> 
        )})}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
