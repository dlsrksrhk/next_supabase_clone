"use client";

import { userState } from "@/app/recoil/atoms";
import Link from "next/link";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

export default function UserUpdatePage() {
  const [user, setUser] = useRecoilState(userState);

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  return (
    <div>
      <h1>Update User Page</h1>
      <div className="my-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={user.email}
          onChange={changeEmail}
          className="bg-slate-200 rounded-md outline-none p-1 shadow-md mx-2"
        />
      </div>
      <div className="my-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={user.name}
          onChange={changeName}
          className="bg-slate-200 rounded-md outline-none p-1 shadow-md mx-2 "
        />
      </div>
      <Link
        href="/users/updated-user"
        className="bg-sky-300 rounded-md border-none p-1 m-2 inline-block"
      >
        Go Updated User
      </Link>
    </div>
  );
}
