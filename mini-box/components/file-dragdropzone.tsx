"use client";

import { Spinner } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "actions/storageActions";
import { queryClient } from "config/ReactQueryClientProvider";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function FileDragDropZone() {
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      console.log("Upload complete");
      queryClient.invalidateQueries({ queryKey: ["images"] });
    },
  });

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length === 0) return;
    const formData = new FormData();

    acceptedFiles.forEach((file) => {
      formData.append("file", file);
    });

    const result = await uploadImageMutation.mutate(formData);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div
      className="w-full py-20 border-4 border-dotted border-indigo-700 flex flex-col items-center justify-center"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {uploadImageMutation.isPending && <Spinner />}
      {!uploadImageMutation.isPending &&
        (isDragActive ? (
          <p>이곳에 파일을 내려놓으세요 ...</p>
        ) : (
          <p>파일을 드래그 앤 드롭 하거나 이곳을 클릭하세요.</p>
        ))}
    </div>
  );
}
