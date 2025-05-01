"use client";

import { searchFiles } from "app/actions/storageActions";
import DropboxImage from "./dropbox-image";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";

export default function DropboxImageList({
  searchInput,
}: {
  searchInput: string;
}) {
  const searchImagesQuery = useQuery({
    queryKey: ["images", searchInput],
    queryFn: () => searchFiles(searchInput),
  });

  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
      {searchImagesQuery.isLoading && <Spinner />}

      {searchImagesQuery.data?.map((file: any) => (
        <DropboxImage key={file.id} image={file} />
      ))}
    </section>
  );
}
