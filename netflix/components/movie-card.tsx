"use client";

import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div className="col-span-1 relative">
      <img className="w-full" src={movie.image_url} />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 z-10 flex items-center justify-center">
        <Link href={`/movies/${movie.id}`}>
          <p className="text-white text-2xl font-bold">{movie.title}</p>
        </Link>
      </div>
    </div>
  );
}
