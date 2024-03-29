import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../register/register.scss";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
    }
    try {
      const res = await fetch(
        "https://demo-api.ideabridge.lt/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (res.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(formData);
  return (
    <div className="container centered">
      <h2 className="mt-5 text-center">Registruotis</h2>
      <form className="mt-3 form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Jūsų vardas"
            id="name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Jūsų elektroninis paštas"
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
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Pakartoti Slaptažodį"
            id="password_confirmation"
            name="password_confirmation"
            onChange={handleChange}
          />
        </div>
        <div className="centering">
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Registruotis
          </button>
        </div>
        <div className="mb-3 margin">
          <p>Turite paskyrą?</p>{" "}
          <p>
            <Link to={"/login"}>Prisijungti</Link>
          </p>
        </div>
        </div>
      </form>
    </div>
  );
}
