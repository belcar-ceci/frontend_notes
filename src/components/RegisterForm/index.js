import "./style.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
//import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
 

    const registerUser = async (e) => {
    try {
      e.preventDefault();

      const userToRegister = { email, password };

      if (name) {
        userToRegister.name = name;
      }

      const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userToRegister),
      });
      if (!res.ok) {
        const body = await res.json();
        console.log(body)
        throw new Error(body.message);
      }

      setError("");
      setName("");
      setEmail("");
      setPassword("");
      toast.success("Registered succesfully. Check your email!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form className="register_form" onSubmit={registerUser}>
        <h4>Register</h4>
        <label htmlFor="name">Name:</label>
        <input
          className="controls"
          id="name"
          type="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="email">Email*:</label>
        <input
          className="controls"
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password*:</label>
        <input
          className="controls"
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <section className="register_buttons">
        <Button className="button_component">Register</Button>
          <Link className="register_link_form" to="/login">Login</Link>
        </section>
      </form>

      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default RegisterForm;
