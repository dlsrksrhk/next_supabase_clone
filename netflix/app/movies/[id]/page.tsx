import UI from "./ui";

export default function MovieDetail({ params }: { params: { id: string } }) {
  return (
    <main className="pt-20 pl-2 flex items-center bg-blue-50 w-full absolute top-0 left-0 right-0 bottom-0 overflow-y-auto">
      <UI id={params.id} />
    </main>
  );
}
