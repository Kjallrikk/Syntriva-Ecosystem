import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Syntriva Ecosystem",
  description: "Autonomous AI income ecosystem and GPT infrastructure."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20 pb-12">
          <div className="container-core">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
