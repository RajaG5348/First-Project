import React, { useEffect, useState } from "react";
import "../Styles/Menu.css";
import { Col, Container, Row } from "reactstrap";

import {
  AllFoodMenu,
  BiriyaniItem,
  PizzaItem,
  BurgerItem,
  DessertItem,
} from "../Assets/fake-data/MenuCategory";

const Menu = ({ handleClick, warning }) => {
  
  const [Filter, setFilter] = useState("ALL-FOODS");
  const [Product, setProduct] = useState(AllFoodMenu);
  useEffect(() => {
    if (Filter === "BIRIYANI-MENU") {
      setProduct(BiriyaniItem);
    }
    if (Filter === "ALL-FOODS") {
      setProduct(AllFoodMenu);
    }
    if (Filter === "PIZZA") {
      setProduct(PizzaItem);
    }
    if (Filter === "BURGERS") {
      setProduct(BurgerItem);
    }
    if (Filter === "DESSERTS") {
      setProduct(DessertItem);
    }
  }, [Filter]);

  return (
    <section className="menu__bar">
      <Container>
        <Row>
          <Col>
            <h3>Our Menu pack</h3>

            <div className="display__menu">
              <button
                className="filter__btn active_btn"
                onClick={() => setFilter("ALL-FOODS")}
              >
                All foods Menu
              </button>
              <button
                className="filter__btn"
                onClick={() => setFilter("PIZZA")}
              >
                Pizza
              </button>
              <button
                className="filter__btn"
                onClick={() => setFilter("BIRIYANI-MENU")}
              >
                Biriyani
              </button>

              <button
                className="filter__btn"
                onClick={() => setFilter("BURGERS")}
              >
                Burger
              </button>
              <button
                className="filter__btn"
                onClick={() => setFilter("DESSERTS")}
              >
                Dessets
              </button>
            </div>
          </Col>
          <Col>
            <div className="Product">
              <Col className="Catagory__menu">
                {Product.map((item) => (
                  <div key={item.id}>
                    <h2 className="title-2">{item.heading}</h2>
                    <div className="product__details" key={item.id}>
                      <div className="product_img">
                        <img src={item.imgUrl} alt="img" />
                      </div>
                      <div className="product__contents">
                        <h6>{item.title}</h6>
                        <div className="price__card">
                          <span className="price">
                            price : $ <span>{item.price}</span>
                          </span>
                          <span
                            className="shoping__icon"
                            role="button"
                            onClick={() => handleClick(item)}
                          >
                            <button>add to cart</button>
                            <i className="ri-shopping-cart-line"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="warning">
        {warning && alert("item is already add to the cart")}
      </div>
    </section>
  );
};

export default Menu;
