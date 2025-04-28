export default function DashboardDetailPage({ params, searchParams }) {
  console.log(params);
  return (
    <main>
      <h1>Dashboard Detail {params.id}</h1>
    </main>
  );
}
