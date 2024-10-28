import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    errors: {},
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formState.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formState.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formState.password) {
      errors.password = 'Password is required';
    }
    setFormState((prev) => ({ ...prev, errors }));

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted', formState);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={formState.email} onChange={handleChange} />
        {formState.errors.email && <p>{formState.errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formState.password} onChange={handleChange} />
        {formState.errors.password && <p>{formState.errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
