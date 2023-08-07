import React, { useContext } from "react";
import { ShoppingCart } from "heroicons-react";
import {  useSelector } from "react-redux";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const data = useSelector((state) => state.menuItem);
  const { menuList, status } = data;
  const { setCartCount, cartCount } = useContext(CartContext);
  return (
    <nav>
      <div className="navlist">
        {menuList?.map((item, index) => {
          return (
            <div key={index}>
              <h1 className="rest-name">
                {" "}
                {item?.restaurant_name}
              </h1>
            </div>
          );
        })}
        <div className="order">
          <h3 className="myorder">My Orders</h3>
          <ShoppingCart className="text-zinc-400 " />
          <span className="cartcou">
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
