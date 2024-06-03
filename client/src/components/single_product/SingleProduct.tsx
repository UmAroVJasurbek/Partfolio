import { useLocation } from "react-router-dom";
import "./SingleProduct.scss";
import patek from "../../db/resource";
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Carousel from "../carousel/Carousel";
import heart from "../../assets/heart.svg";
import book from "../../assets/book.svg";
import printer from "../../assets/printer.svg";
import share from "../../assets/share.svg";
import map from "../../assets/map.svg";

import { likeProduct } from "../../redux/slice/likeSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";


const SingleProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const [isClicked, setIsclicked] = useState(false);
  const [_, collectionPrefix, collectionPath, productId] = pathname.split("/");
  const collection = patek.find((c) => c.pathname === collectionPath);
  const product = collection?.products.find(
    (p) => p.id === parseInt(productId)
  );
  console.log(collectionPath, productId, collectionPrefix);
  let firstpart = product?.title.split("-")[0];
    
  return (
    <>
      <div className="single_product_wrapper">
        <div
          className="single_product_banner"
          style={{ backgroundImage: `url(${product?.product_banner})` }}
        >
          <div className="single_product_title">
            <h2>{firstpart}</h2> <br />
            <h3>perpetual calendar</h3>
          </div>
        </div>
        <div className="introduction">Introduction</div>
        <div className="single_product_description">
          <div className="single_product_description-top">
            <h1>
              {" "}
              <span>{firstpart}</span> - {product?.collection_name}
            </h1>
            <p>Self-winding</p>
          </div>
          <div className="single_product_description-right">
            <p>{product?.product_description}</p>
          </div>
          <div className="single_product_description-left">
            <div className="single_product_description-left-content">
              <h2>Watch</h2>
              <p>{product?.watch}</p>
            </div>
            <div className="single_product_description-left-content">
              <h2>dial</h2>
              <p>{product?.dial}</p>
            </div>
            <div className="single_product_description-left-content">
              <h2>Case</h2>
              <p>{product?.case}</p>
            </div>
            <div className="single_product_description-left-content">
              <h2>Strap</h2>
              <p>{product?.strap}</p>
            </div>
          </div>
          <div
            className={`single_product_description-bottom ${
              isClicked ? "single_product_description-bottom--clicked" : ""
            }`}
          >
            <p>
              <span>Price:</span> On Request
            </p>
          </div>

          <div className="button_wrapper">
            <button onClick={() => setIsclicked(!isClicked)}>
              {isClicked ? <IoChevronUp /> : <IoChevronDown />}
            </button>
          </div>
        </div>
      </div>
      <Carousel images={product?.images} />
      <div className="social_buttons">
        <div className="social_button" onClick={() => dispatch(likeProduct(product))}>
          <img src={heart} alt="" />
          <div className="line"></div>
          <p>Add to my favorites</p>
        </div>
        <div className="social_button">
          <img src={book} alt="" />
          <div className="line"></div>
          <p>Instruction for use</p>
        </div>
        <div className="social_button">
          <img src={printer} alt="" />
          <div className="line"></div>
          <p>printable version</p>
        </div>
        <div className="social_button">
          <img src={share} alt="" />
          <div className="line"></div>
          <p>share</p>
        </div>
        <div className="social_button link link--outline">
          <img src={map} alt="" />
          <div className="line"></div>
          <p>authorized retailers</p>
        </div>
      </div>
      <div className="images">
        <img src={product?.images[0]} alt="" />
        <img src={product?.images[1]} alt="" />
        <img src={product?.images[2]} alt="" />
        <img
          src="https://static.patek.com/images/articles/gallery_thumbnail/500/5327G_001_6@2x.jpg"
          alt=""
        />
        <img
          src="https://static.patek.com/images/articles/gallery/2200/5327G_001_7@2x.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default SingleProduct;
