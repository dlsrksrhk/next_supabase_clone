"use client";

import { useState } from "react";
import MovieCardList from "../components/movie-card-list";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <main className="mt-20">
      <MovieCardList />
    </main>
  );
}
