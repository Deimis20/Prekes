import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/UserSlice.js";
import "./login.scss";
export default function SignInPage() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("https://demo-api.ideabridge.lt/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="container centered">
      <h2 className="mt-5 text-center">Prisijungti</h2>
      <form className="mt-3 form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="El.Paštas"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Slaptažodis"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="centering">
          <div className="mt-2">
            <button className="btn btn-primary" type="submit">
              Prisijungti
            </button>
          </div>
          <div className="margin">
            <p>
              Neturite paskyros?</p> <p><Link to={"/register"}>Registracija</Link>
            </p>
          </div>
        </div>
      </form>
      {errorMessage && (
        <p className="mt-5" color="failure">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
