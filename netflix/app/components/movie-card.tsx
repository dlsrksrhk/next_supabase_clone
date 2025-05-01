"use client";

import Link from "next/link";

export default function MovieCard() {
  return (
    <div className="col-span-1 relative">
      <img
        className="w-full"
        src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
      />
      {/* <div className="absolute top-0 left-0 right-0 bg-black">
        Follow the mythic journey of Paul Atreides as he unites with Chani and
        the Fremen while on a path of revenge against the conspirators who
        destroyed his family. Facing a choice between the love of his life and
        the fate of the known universe, Paul endeavors to prevent a terrible
        future only he can foresee.
      </div> */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 z-10 flex items-center justify-center">
        <Link href={`/movies/1`}>
          <p className="text-white text-2xl font-bold">Dune Part Two</p>
        </Link>
      </div>
    </div>
  );
}
