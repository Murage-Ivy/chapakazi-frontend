import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerProfile.css";

function CustomerProfile() {
  const navigate = useNavigate();

  const customerId = JSON.parse(localStorage.getItem("customerInfo"));
  const [customer, setCustomer] = useState({});
  const [errors, setErrors] = useState([]);
  const token = localStorage.getItem("customer");
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const fetchCustomer = async () => {
      const response = await fetch(`customers/${customerId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setCustomer(data);
      } else {
        setErrors(data.errors);
      }
    };

    fetchCustomer();
  }, [token, customerId]);

  function logout() {
    setTrigger(false);
    localStorage.removeItem("customer");
    localStorage.removeItem("customerInfo");
    navigate("/customerLogin");
  }


  return (
    <>
      <div className="customer-profile">
        {errors.length > 0 ? (
          <div  className="customer-profile"style={{ color: "red", fontSize:"18px", fontWeight: "bold" }}>
            Log to view profile
          </div>
        ) : null}
        <img src={customer.image} alt={customer.username} />
        <h3>{customer.username}</h3>
        <h4>{customer.location}</h4>
        <div className="profile-actions">
          <button className="customer-logout-btn" onClick={logout}>
            Log Out
          </button>
          <button className="customer-reset" onClick={logout}>
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomerProfile;