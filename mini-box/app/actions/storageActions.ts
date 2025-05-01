"use server";

import { createServerSupabaseClient } from "app/utils/supabase/server";

export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File;

  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
    .upload(file.name, file, { upsert: true });

  if (error) {
    handleError(error);
  }

  return data;
}

function handleError(error: any) {
  console.error("Error uploading file:", error.message);
  throw new Error("File upload failed");
}

export async function searchFiles(fileName: string) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
    .list(null, {
      search: fileName,
    });

  if (error) {
    handleError(error);
  }

  return data;
}

export async function deleteFile(fileName: string) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
    .remove([fileName]);

  if (error) {
    handleError(error);
  }

  return data;
}
