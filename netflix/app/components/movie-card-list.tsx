"use client";

import { useQuery } from "@tanstack/react-query";
import MovieCard from "./movie-card";
import { searchMovies } from "app/actions/movieAction";
import { Spinner } from "@material-tailwind/react";
import { useRecoilValue } from "recoil";
import { searchState } from "app/utils/recoil/atoms";

export default function MovieCardList() {
  const search = useRecoilValue(searchState);

  const getAllMoviesQuery = useQuery({
    queryKey: ["movie", search],
    queryFn: () => searchMovies(search),
  });

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 w-full h-full gap-1 pb-16">
      {getAllMoviesQuery.isLoading && <Spinner />}
      {getAllMoviesQuery.data?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
