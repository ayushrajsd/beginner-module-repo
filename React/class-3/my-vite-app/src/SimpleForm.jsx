import React, { useState } from "react";

const SimpleForm = () => {
  // Initializing state for form inputs
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email) {
      return false;
    }
    // Additional validation logic...
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      console.error("Form is invalid");
      return;
    }

    console.log(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
