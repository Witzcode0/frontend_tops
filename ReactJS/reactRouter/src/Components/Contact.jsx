import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from './Contact.module.css'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/thank-you");
  };

  return (
    <>
      <h2 className={Styles.title}>Submit Your Request</h2>
      <form onSubmit={handleSubmit} className={Styles.contactForm}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          required
          rows="4" 
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
