"use client";

import { ThemeProvider } from "next-themes";
import { Suspense } from "react";
import { FramesProvider } from "./context";

export default function Provider({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Suspense>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <FramesProvider>{children}</FramesProvider>
      </ThemeProvider>
    </Suspense>
  );
}
