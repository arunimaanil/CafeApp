import React from "react";
import Cart from "./cart";

const Dish = (props) => {
  // console.log(props);

  return (
    <article className="w-full">
      {/* {console.log("dd",dishes)} */}

      {props.dishes === undefined
        ? ""
        : props.dishes.map((item, index) => {
            return (
              <div className="cart_box container mx-auto" key={index}>
                <div>
                  <h1 className=" dish-name ">
                    {item?.dish_name}
                  </h1>
                  <h3 className="dish-currency">
                    {item?.dish_currency}
                    {""} {item?.dish_price}
                  </h3>
                  <h4 className="dish-desc">
                    {item?.dish_description}
                  </h4>
                  {item.dish_Availability ? (
                    <Cart item={item} cartCount={props.setCart} />
                  ) : (
                    <h4 className="availability">
                      Not Available
                    </h4>
                  )}
                </div>
                <div className="flex ">
                  <h3 className="dish-calories">
                    {item?.dish_calories} Calories
                  </h3>
                  <div className="dish-image ">
                    <img src={item?.dish_image} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
    </article>
  );
};

export default Dish;
