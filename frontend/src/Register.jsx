import { useState } from "react";
import api from "./api";
import "./Login.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async e => {
    e.preventDefault();
    await api.post("/auth/register", form);
    window.location = "/login";
  };

  return (
    <div className="login-wrapper">
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password"
        onChange={e => setForm({ ...form, password: e.target.value })} />
      <button>Create Account</button>
    </form>
    </div>
  );
}
