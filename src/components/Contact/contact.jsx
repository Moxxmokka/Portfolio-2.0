import React from "react";
import "./contact.css";
import { FaGithub, FaEnvelope } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function Contact() {
  const style = {
    color: "#e4b1f0",
    fontSize: "30px",
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2a55ac97-9d55-4dd5-826c-b0274468abda");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Message sent successfully",
        text: "I'll get back to you soon",
        icon: "success",
        background: "white",
        color: "#e4b1f0",
        confirmButtonText: "Ok",
        confirmButtonColor: "#e4b1f0",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      Swal.fire({
        title: "Something went wrong",
        text: "Please try again",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#e4b1f0",
      });
    }
  };

  return (
    <div className="contactMeWrapper">
      <div className="contactMe">
        <h1 id="contactText">Write me a message:</h1>
        <form onSubmit={onSubmit} id="form">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            id="inputName"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="allLinks">
        <ul>
          <li>
            <a href="https://github.com/Moxxmokka">
              <FaGithub style={style} />
            </a>
          </li>
          <li>
            <a href="mailto: dagge05.mail@gmail.com">
              <FaEnvelope style={style} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}