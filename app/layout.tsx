import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "EchoHire",
  description: " EchoHire is a realistic virtual interview simulator that uses AI avatars to replicate the experience of facing a live interviewer Instead of just answering text-based questions, users see and talk to a lifelike interviewer who responds naturally and gives feedback in real time.",
    authors: [{name:"Aqsa Asif"},{url:"https://github.com/Aqsa1211"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}
      <Toaster/>
      </body>
    </html>
  );
}
