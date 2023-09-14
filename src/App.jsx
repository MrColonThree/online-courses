import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
function App() {
  const [cart, setCart] = useState([]);
  const [remainingHour, setRemainingHour] = useState([20]);
  const [totalCredit, setTotalCreditHour] = useState([0]);
  const [totalPrice, setTotalPrice] = useState([0]);
  const handleClickSelect = (course) => {
    const isExist = cart.find((item) => item.id == course.id);
    if (!isExist && remainingHour >= totalCredit) {
      const newCart = [...cart, course];
      setCart(newCart);
      setRemainingHour(parseInt(remainingHour - course.credit_hours));
      setTotalCreditHour(parseInt(totalCredit + course.credit_hours));
      setTotalPrice(parseInt(totalPrice + course.price));
    } else {
      return alert("The course has been already added");
    }
  };
  return (
    <>
      <Header></Header>
      <div className="flex flex-xol md:flex-row gap-3">
        <Courses handleClickSelect={handleClickSelect}></Courses>
        <Cart
          cart={cart}
          remainingHour={remainingHour}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
        ></Cart>
      </div>
    </>
  );
}

export default App;
