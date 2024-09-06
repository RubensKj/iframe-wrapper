"use client";

import { useFrame } from "@/app/context";
import { cn } from "@/utils/cn";
import { DownloadIcon, UploadIcon } from "lucide-react";

export function ExportButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { exportToClipboard } = useFrame();

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-8 gap-1",
        className
      )}
      onClick={exportToClipboard}
      {...props}
    >
      <DownloadIcon className="h-4 w-4" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Export
      </span>
    </button>
  );
}

export function ImportButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { exportToClipboard } = useFrame();

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-8 gap-1",
        className
      )}
      onClick={exportToClipboard}
      {...props}
    >
      <UploadIcon className="h-4 w-4" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Import
      </span>
    </button>
  );
}
