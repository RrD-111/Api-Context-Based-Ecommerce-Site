import React from "react";
import { Carousel } from "react-responsive-carousel";
import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";

const Home = () => {
  const { products } = CartState();

  return (
    <div className="Homee" style={{ textAlign: "center" }}>
      <span className="hometitle" style={{ fontSize: 30 }}>Products Page</span>

      {/* Carousel section */}
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} // Set the interval in milliseconds (e.g., 3000ms for 3 seconds)
        className="carousel-container"
      >
       <div>
          <img src="https://assets.thehansindia.com/h-upload/2022/10/03/1314817-big-dussehra-sale.webp" alt="Image 1" />
        </div>
        <div>
          <img src="https://cdn.flipshope.com/blog/wp-content/uploads/2023/05/banner-6.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="https://www.forbesindia.com/media/images/2019/Oct/img_122683_newsbicard900by600.jpg" alt="Image 3" />
        </div>
        <div>
          <img src="https://www.destinyusa.com/wp-content/uploads/sites/7/2017/01/2023-06-12-sfp-slider-ON-SALE.jpg" alt="Image 4" />
        </div>
      </Carousel>

      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
