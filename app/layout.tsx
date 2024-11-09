import type { Metadata } from "next";
import Provider from "./utilities/provider";
import Navbar from "./navbar/navbar";

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Get details of Pokemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
