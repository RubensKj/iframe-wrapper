import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "iFrame Wrapper",
  description:
    "Wrap your url into an iFrame. With no ads and not opening links...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.className, fontBody.className)}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
