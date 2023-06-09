import "../Styles/home.css";
import pic from "../Assets/Images/Hero.png";
import { Link } from "react-router-dom";
import Category from "./Category";
import HomeImg1 from "../Assets/Images/service-01.jpg";
import HomeImg2 from "../Assets/Images/service-02.png";
import HomeImg3 from "../Assets/Images/service-03.png";

const featureData = [
  {
    title: "Quick Delivery ",
    imgUrl: HomeImg1,
    disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, aut! Aut quis optio earum veritatis",
  },
  {
    title: "Dine In",
    imgUrl: HomeImg2,
    disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Saepe, aut! Aut quis optio earum veritatis",
  },
  {
    title: "Easy to Pic Up",
    imgUrl: HomeImg3,
    disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, aut! Aut quis optio earum veritatis",
  },
];

export default function Home({ handleClick }) {

  
  return (
    <div>
      <section className="home section ">
        <div className="row">
          <div className="col-1">
            <h5>Easy way to make order</h5>
            <h2>
              <span>Hungry ?</span>Just wait <br /> food at
              <span> Your door</span>
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
              aut! Aut quis optio earum veritatis
            </p>
            <div className="home__btn">
              <button className="order__btn">
                Order Now <i className="bi bi-caret-right"></i>
              </button>
              <button className="allfoods__btn">
                <Link to="/my-home/menu">Menu</Link>
              </button>
            </div>
            <div className="hero__service">
              <p className="hero__ico">
                <i className="bi bi-truck"></i>
                <span>No Shipping Charge</span>
              </p>

              <p className="hero__ico ">
                <i className="bi bi-shield-check"></i>
                <span>100% secure Payment</span>
              </p>
            </div>
          </div>

          <div className="col-2">
            <img src={pic} alt="img" />
          </div>
        </div>
      </section>

      <section>
        <Category />
      </section>

      <section className="home-text">
        <div>
          <div className="text__center">
            <h5>What we Serve</h5>
            <h2>Order your food while sitting at home</h2>
            <h2>
              We will <span>Take care Of It</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              dolor.offciis ?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. aperiam,
              eius.
            </p>
          </div>
        </div>

        <div className="home__images">
          {featureData.map((item, index) => {
            return (
              <div className="home__items" key={index}>
                <img src={item.imgUrl} alt="img" />
                <h5>{item.title}</h5>
                <p>{item.disc}</p>
              </div>
            );
          })}
        </div>
      </section>
      
    </div>
  );
}
