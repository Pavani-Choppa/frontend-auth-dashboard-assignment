import { useState } from "react";
import api from "./api";
import "./Login.css";


export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async e => {
    e.preventDefault();
    const res = await api.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    window.location = "/";
  };

  return (
    <div className="login-wrapper">
  <form onSubmit={submit}>
    <h2>Login</h2>

    <input
      placeholder="Email"
      onChange={e => setForm({ ...form, email: e.target.value })}
    />

    <input
      placeholder="Password"
      type="password"
      onChange={e => setForm({ ...form, password: e.target.value })}
    />

    <button>Login</button>
  </form>
</div>

  );
}
