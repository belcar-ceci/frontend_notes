import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setToken } = useUserTokenContext();
  const navigate = useNavigate();

  const loginUser = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const body = await res.json();
      console.log(body);

      if (!res.ok) {
        throw new Error(body.message);
      }

      setToken(body.data.token);

      setError("");
      setEmail("");
      setPassword("");
      toast.success("Logged succesfully!");
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form className="register_form" onSubmit={loginUser}>
        <h4>Login</h4>
        <label htmlFor="email">Email:</label>
        <input
          className="controls"
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          className="controls"
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button className="button_component btnLogin">Login</Button>
      </form>

      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default LoginForm;
