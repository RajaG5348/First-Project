import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Assets/Images/logo.png";
import "../Styles/Sidebar.css";
import React, { useEffect, useRef } from "react";
import { Container } from "reactstrap";

const Sidebar = ({ size }) => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const navbarDeatils = [
    { path: "/myhome/home", navName: "Home" },
    { path: "/myhome/menu", navName: "Menu" },
    { path: "/myhome/cart", navName: "Cart" },
    
  ];

  const togglemenu = () => menuRef.current.classList.toggle("show__menu");
 
useEffect(()=>{
window.addEventListener('scroll',()=>
{
  if(document.body.scrollTop>80 ||document.documentElement.scrollTop>80){
    headerRef.current.classList.add("scroll__menu")
  }
  else{
    headerRef.current.classList.remove("scroll__menu")
  }
})
return()=>window.removeEventListener('scroll')
},[]) 
 
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo" onClick={() => navigate("/myhome/home")}>
            <img src={Logo} alt="logo" />
          </div>
          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5">
              {navbarDeatils.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navclassName) =>
                    navclassName.isActive ? "active__menu" : ""
                  }
                  onClick={togglemenu}
                >
                  {item.navName}
                </NavLink>
              ))}

              <span
                className="close__button"
                role="button"
                onClick={togglemenu}
              >
                <i className="fa-sharp fa-solid fa-xmark "></i>
              </span>

              <div className="custom__search">
                <input type="text" placeholder="search item...." />
                <span>
                  <i className="ri-search-2-line"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="nav__right d-flex align-items-center gap-g-5">
            <span className="cart__icon ">
              <i
                className="ri-shopping-basket-line"
                role="button"
                onClick={() => navigate("/myhome/cart")}
              ></i>
              <span className="cart__badge">{size}</span>
            </span>
            <span
              className="user"
              role="button"
              onClick={() => navigate(`/myhome/sign-in`)}
            >
              <i class="fa-sharp fa-solid fa-user"></i>
            </span>

            <span className="mobile__menu" onClick={togglemenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Sidebar;
