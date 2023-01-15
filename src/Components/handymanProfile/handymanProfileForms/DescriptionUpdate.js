import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDescription } from "../handymanProfileSlice";

function DescriptionUpdate() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("handyman");
  const profileId = JSON.parse(localStorage.getItem("profileId"));
  const [description, setDescription] = useState({
    description: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setDescription({
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateDescription(profileId, token, description));
    setDescription({
      description: "",
    });
  }
  return (
    <div className="updateForm">
      <form onSubmit={handleSubmit}>
        <textarea
         cols="50"
         rows="4"
          type="text"
          name="description"
          value={description.description}
          onChange={handleChange}
        />
        <button> submit change </button>
      </form>
    </div>
  );
}

export default DescriptionUpdate;
