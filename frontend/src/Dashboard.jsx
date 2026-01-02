import { useEffect, useState } from "react";
import api from "./api";
import './Dashboard.css'

export default function Dashboard() {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const load = async () => {
    const me = await api.get("/me");
    setUser(me.data);

    const t = await api.get("/tasks");
    setTasks(t.data);
  };

  useEffect(() => { load(); }, []);

  const add = async () => {
    const res = await api.post("/tasks", { title });
    setTasks([...tasks, res.data]);
    setTitle("");
  };

  const update = async (id, status) => {
    const res = await api.put(`/tasks/${id}`, { status });
    setTasks(tasks.map(t => t._id === id ? res.data : t));
  };

  const remove = async id => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  const filtered = tasks.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
        <div className="dashboard-container"></div>
            <div className="dashboard-top">
                <h2>Welcome {user.name}</h2>
                <button onClick={() => { localStorage.clear(); window.location = "/login"; }}>
                Logout
                </button>
            </div>

            <div className="task-controls">
                <input
                placeholder="Search tasks"
                value={search}
                onChange={e => setSearch(e.target.value)}
                />

                <input
                placeholder="New task"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />

                <button onClick={add}>Add</button>
            </div>

            <div className="task-list">
                {filtered.map(t => (
                <div key={t._id} className="task-item">
                    <span>{t.title}</span>

                    <select value={t.status} onChange={e => update(t._id, e.target.value)}>
                    <option>pending</option>
                    <option>done</option>
                    </select>

                    <button onClick={() => remove(t._id)}>Delete</button>
                </div>
                ))}
            </div>
       
         </div>
    

  );
}
