import { Metadata } from "next";
import UI from "./ui";

export const metadata: Metadata = {
  title: "Netflix",
  description: "Netflix clone built with Next.js and Tailwind CSS",
  openGraph: {
    title: "Netflix",
    description: "Netflix clone built with Next.js and Tailwind CSS",
    siteName: "Netflix",
    locale: "ko-KR",
    type: "website",
  },
};

export default function Home() {
  return <UI />;
}
