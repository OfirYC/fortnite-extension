import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dreamday Car Rental",
  description: "Salt Lake City Car Rentals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <link rel="stylesheet" href="globals.css" as="style" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      ></meta>

      <body className={inter.className + " bg-custom-bg overflow-x-hidden"}>
        <div className=" overflow-x-hidden overflow-y-visible">{children}</div>
        {/* <script src=""></script> */}
      </body>
    </html>
  );
}
