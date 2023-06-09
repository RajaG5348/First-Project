import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Layout from "./Layout";
import Notfound from "./Notfound";
import Cart from "./Cart";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { Forgotpassword, Register } from "./Signup";

const RoutesComponent = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;

    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 5000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div>
      <Routes>
        <Route path="/First_project" element={<Navigate to="/myhome/home" />} />
        <Route path="/" element={<Navigate to="/myhome/home" />} />
        <Route path="/navbar" element={<Sidebar />} />

        <Route path="/myhome" element={<Layout cart={cart} />}>
          <Route path="home" element={<Home />} handleClick={handleClick} />
          <Route
            path="menu"
            element={<Menu handleClick={handleClick} warning={warning} />}
          />
          <Route
            path="cart"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
          />
          <Route path="sign-in" element={<Login />} />
          <Route path="sign-up" element={<Register />} />
          <Route path="fwd" element={<Forgotpassword />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
