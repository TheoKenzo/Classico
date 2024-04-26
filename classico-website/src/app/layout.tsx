import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Providers} from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Classico",
  description: "Ressonâncias Intemporais: O Mundo Fascinante da Música Clássica",
  icons: {
    icon: [
      {
        url: "/images/MainIcon.svg",
        href: "/images/MainIcon.svg",
      },
    ],
  },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
