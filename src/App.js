import React, { useState } from "react";
import CustomerForm from "./Components/customer/CustomerForm";
import LandingPage from "./Components/landingPage/LandingPage";
import HandymanForm from "./Components/handyman/HandymanForm";
import ReviewForm from "./Components/review/ReviewForm";
import ReviewContainer from "./Components/review/ReviewContainer";
import MessageForm from "./Components/message/MessageForm";
import MessageContainer from "./Components/message/MessageContainer";
import CustomerLogin from "./Components/customer/CustomerLogin"
import { Route, Routes } from "react-router-dom";

function App() {
  const [trigger, setTrigger] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/handyman/signup" element={<HandymanForm />} />
        <Route path="/customer/signup" element={<CustomerForm />} />
        <Route path="/customer/login" element={<CustomerLogin />} />
      </Routes>

      {/* <ReviewForm/> */}
      {/* <ReviewContainer /> */}
      {/* <MessageContainer /> */}
    </div>
  );
}

export default App;
