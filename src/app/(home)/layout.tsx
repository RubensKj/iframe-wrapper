import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iFrame Wrapper",
  description: "Wrap your url into an iFrame. With no ads and not opening links...",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      {children}
    </div>
  );
}
