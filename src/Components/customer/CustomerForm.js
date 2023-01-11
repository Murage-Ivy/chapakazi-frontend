import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Customer.css";
import { signupCustomer } from "./customerSlice";

function CustomerForm() {
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const [formData, setFormData] = useState({
    username: "",
    location: "",
    password: "",
    password_confirmation: "",
    image: "",
    id: 0,
    admin_id: 1,
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(signupCustomer(formData));
  }

  return (
    <div className="form">
      <div className="signup-container">
        <div className="right-container" onSubmit={handleFormSubmit}>
          <header>
            <div className="set">
              <div className="customer-name">
                <label htmlFor="customer-name"> Name </label>
                <input
                  id="customer-name"
                  //   placeholder="Name..."
                  name="username"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="customer-location">
                <label htmlFor="customer-venue"> Location </label>
                <input
                  id="customer-venue"
                  //   placeholder="Location..."
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
            </div>
            <div className="set">
              <div className="customer-name">
                <label htmlFor="customer-password"> Password </label>
                <input
                  id="customer-name"
                  //   placeholder="Password..."
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>

              <div className="customer-name">
                <label htmlFor="customer-password">Password Confirmation</label>
                <input
                  id="customer-name"
                  //   placeholder="Password..."
                  name="password_confirmation"
                  type="password"
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
            </div>

            <div className="set">
              <div className="customer-name">
                <label htmlFor="customer-image"> Image </label>
                <input
                  id="customer-name"
                  //   placeholder="Image..."
                  name="image"
                  type="text"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
             
            </div>

          </header>
          <footer>
            <div className="set">
              <button id="next" type="submit" onClick={handleFormSubmit}>
                Submit
              </button>
            </div>

            <Link to="/customerLogin">
              <h2>
                Do not have an account ?<span className="Login">Sign Up</span>
              </h2>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default CustomerForm;
