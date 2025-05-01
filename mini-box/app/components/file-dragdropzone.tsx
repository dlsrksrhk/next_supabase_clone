"use client";

import { Button } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "app/actions/storageActions";
import { queryClient } from "app/config/ReactQueryClientProvider";
import { useRef } from "react";

export default function FileDragDropZone() {
  const fileRef = useRef(null);

  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["images"] });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = fileRef.current?.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const result = await uploadImageMutation.mutate(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="w-full py-20 border-4 border-dotted border-indigo-700 flex flex-col items-center justify-center">
        <input type="file" className="" ref={fileRef} />
        <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요.</p>
        <Button
          className="mt-4 bg-indigo-700 text-white px-4 py-2 rounded-md"
          type="submit"
          loading={uploadImageMutation.isPending}
        >
          업로드
        </Button>
      </section>
    </form>
  );
}
