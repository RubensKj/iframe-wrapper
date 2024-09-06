"use client";

import { FramesProvider } from "./context";

export default function Provider({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <FramesProvider>{children}</FramesProvider>;
}
