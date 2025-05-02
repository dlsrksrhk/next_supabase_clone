import { Metadata } from "next";
import UI from "./ui";

export const metadata: Metadata = {
  title: "Root Home",
  description: "기본 Home",
};

export default function Home() {
  return (
    <main>
      <UI />
    </main>
  );
}
