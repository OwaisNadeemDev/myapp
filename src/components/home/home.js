import React from "react";
import "./home.css";
import image from "../../assets/images/demo.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  let Products = [
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
    {
      productName: "iPhone 11 Pro",
      productPrice: "500$",
      productLocation: "New York, Ny",
    },
  ];

  return (
    <>
      <div className="home">
        <div className="row">
          <div className="container">
            {Products.map((item) => {
              return (
                <Link to="/checkout">
                <div className="card">
                  <img src={image} alt="images" />
                  <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>
                    <p className="card-text">{item.productPrice}</p>
                    
                    <p>{item.productLocation}</p>
                  </div>
                </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
