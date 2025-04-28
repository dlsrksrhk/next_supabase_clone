import ReactQueryProvider from "./config/ReactQueryProvider";
import RecoilProvider from "./config/RecoilProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <RecoilProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </RecoilProvider>
    </ReactQueryProvider>
  );
}
