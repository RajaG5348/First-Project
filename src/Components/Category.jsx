import React from "react";
import "../Styles/Category.css";
import Categoryimg1 from "../Assets/Images/category-01.png";
import Categoryimg2 from "../Assets/Images/category-02.png";
import Categoryimg3 from "../Assets/Images/category-03.png";
import Categoryimg4 from "../Assets/Images/category-04.png";

const CategoryData = [
  { display: "Biriyani", imgurl: Categoryimg3 },
  { display: "Pizza", imgurl: Categoryimg2 },
  { display: "Burger", imgurl: Categoryimg1 },
  { display: "Dessets", imgurl: Categoryimg4 },
];


const Category = () => {
  return (
    <div className="catlog">
      {CategoryData.map((item, index) => {
        return (
          <div className="category__Menu" key={index}>
            <div className="category__item">
              <img src={item.imgurl} alt="img" />
            </div>
            <h6>{item.display}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
