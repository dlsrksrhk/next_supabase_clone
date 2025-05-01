"use server";
import { createServerSupabaseClient } from "app/utils/supabase/server";
import { Database } from "types_db";

export type MovieRow = Database["public"]["Tables"]["movie"]["Row"];

export async function searchMovies(search = ""): Promise<MovieRow[]> {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("movie")
    .select("*")
    .like("title", `%${search}%`);

  if (error) {
    handleError(error);
  }

  return data;
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
