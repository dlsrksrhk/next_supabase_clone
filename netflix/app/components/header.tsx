"use client";

import { useRecoilState } from "recoil";
import Logo from "./logo";
import { searchState } from "app/utils/recoil/atoms";

export default function Header() {
  const [search, setSearch] = useRecoilState(searchState);

  return (
    <header className="fixed top-0 left-0 right-0 p-4 bg-gray-900 flex items-center justify-between z-50">
      <nav className="flex gap-2">
        <Logo />
        <ul className="flex gap-2 text-white">
          <li>Movies</li>
          <li>Dramas</li>
        </ul>
      </nav>
      <div className="flex items-center gap-2 border border-white bg-transparent text-white rounded-md p-2 max-w-72">
        <i className="fas fa-search"></i>
        <input
          className="bg-transparent outline-none"
          placeholder="Search Movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
