"use client";

import { useEffect, useState } from "react";
import { searchUsers } from "../actions/user-actions";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    searchUsers("David").then((data) => setUsers(data));
  }, []);

  return (
    <main>
      <h1>Users</h1>
      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </main>
  );
}
