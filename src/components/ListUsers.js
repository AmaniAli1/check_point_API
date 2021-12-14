import axios from "axios";
import React, { useState, useEffect } from "react";
import CardUser from "./CardUser";
import "./CardUser.css";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="usersList">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        users.map((user) => <CardUser user={user} />)
      )}
    </div>
  );
};
export default ListUsers;
