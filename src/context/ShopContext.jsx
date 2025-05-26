import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10; // number type better for calculations
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log("cartItems updated:", cartItems);
  }, [cartItems]);

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    setCartItems((prevCart) => {
      // Copy previous cart state deeply
      const newCart = structuredClone(prevCart);

      if (newCart[itemId]) {
        if (newCart[itemId][size]) {
          newCart[itemId][size] += 1;
        } else {
          newCart[itemId][size] = 1;
        }
      } else {
        newCart[itemId] = {};
        newCart[itemId][size] = 1;
      }

      return newCart;
    });
  };

  const removeFromCart = (itemId, size) => {
    setCartItems((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemId] && newCart[itemId][size]) {
        delete newCart[itemId][size];

        // if no sizes left for that product, remove product ID
        if (Object.keys(newCart[itemId]).length === 0) {
          delete newCart[itemId];
        }
      }
      return newCart;
    });
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          totalCount += cartItems[itemId][size];
        }
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (!itemInfo) continue;
      for (const size in cartItems[itemId]) {
        try {
          const quantity = cartItems[itemId][size];
          if (quantity > 0) {
            totalAmount += itemInfo.price * quantity;
          }
        } catch (error) {
          
        }
      }
    }
    return totalAmount;
  };

  const value = { 
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    removeFromCart,
    getCartCount,
    getCartAmount,
    navigate,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
