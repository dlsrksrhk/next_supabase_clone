"use server";
import { createServerSupabaseClient } from "app/utils/supabase/server";
import { Database } from "types_db";

export type MovieRow = Database["public"]["Tables"]["movie"]["Row"];

export async function searchMovies({ search = "", page, pageSize }) {
  const supabase = await createServerSupabaseClient();

  const { data, count, error } = await supabase
    .from("movie")
    .select("*", { count: "exact" })
    .like("title", `%${search}%`)
    .range((page - 1) * pageSize, page * pageSize - 1);

  const hasNextPage = count > page * pageSize;

  if (error) {
    return {
      data: [],
      count: 0,
      page: null,
      pageSize: null,
      error,
    };
  }

  return {
    data,
    page,
    pageSize,
    hasNextPage,
  };
}

function handleError(error: any) {
  console.error("Error:", error.message);
  throw new Error(error.message);
}

export async function getMovie(id): Promise<MovieRow> {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("movie")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    handleError(error);
  }

  return data;
}
