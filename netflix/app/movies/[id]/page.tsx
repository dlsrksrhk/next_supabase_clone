import { getMovie } from "app/actions/movieAction";
import UI from "./ui";

export async function generateMetadata({ params, searchParams }) {
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      title: movie.title,
      description: movie.overview,
      images: [
        {
          url: movie.image_url,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovie(params.id);

  return (
    <main className="pt-20 pl-2 flex items-center bg-blue-50 w-full absolute top-0 left-0 right-0 bottom-0 overflow-y-auto">
      {movie ? <UI movie={movie} /> : <div>Movie Not Found</div>}
    </main>
  );
}
