import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/dashboard/1">Dashboard 1</Link>
      </div>
      <div>
        <Link href="/dashboard/2">Dashboard 2</Link>
      </div>
    </main>
  );
}
