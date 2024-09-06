"use client";

import { Suspense } from "react";
import { FramesProvider } from "./context";

export default function Provider({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Suspense>
      <FramesProvider>{children}</FramesProvider>
    </Suspense>
  );
}
