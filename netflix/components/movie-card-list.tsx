"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import MovieCard from "./movie-card";
import { searchMovies } from "actions/movieAction";
import { Spinner } from "@material-tailwind/react";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/atoms";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function MovieCardList() {
  const search = useRecoilValue(searchState);

  const {
    data,
    isFetching,
    isFetchingPreviousPage,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movie", search],
    queryFn: ({ pageParam }) => {
      return searchMovies({ search, page: pageParam, pageSize: 12 });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page ? lastPage.page + 1 : null;
    },
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 w-full h-full gap-1 pb-16">
      {(isFetching || isFetchingNextPage) && <Spinner />}
      {
        <>
          {data?.pages
            ?.map((page) => page.data)
            ?.flat()
            ?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          <div ref={ref}></div>
        </>
      }
    </div>
  );
}
