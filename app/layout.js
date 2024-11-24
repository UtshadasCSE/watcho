import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navber from "@/components/Navber";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Watcho - Where Stories Come Alive!",
  description:
    "Your ultimate destination for discovering movies, TV shows, and entertainment! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <Navber />
          {children}
        </Providers>
      </body>
    </html>
  );
}
