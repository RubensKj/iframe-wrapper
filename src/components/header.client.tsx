"use client";

import { useFrame } from "@/app/context";
import { cn } from "@/utils/cn";
import { DownloadIcon, Moon, Sun, UploadIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Textarea } from "./ui/textarea";

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
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [config, setConfig] = useState<string | undefined>(undefined);

  const { importFrames } = useFrame();

  const importConfig = (jsonData?: string) => {
    if (!jsonData) {
      setError("Please provide the data");
      return;
    }

    const importation = importFrames(jsonData);

    if (importation.success) {
      setConfig(undefined);
      setError(undefined);
      setOpen(false);
      return;
    }

    return setError(importation.error);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-8 gap-1",
            className
          )}
          {...props}
        >
          <UploadIcon className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Import
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Import Data</DialogTitle>
          <DialogDescription>
            {error ? (
              <span className="text-red-700">{error}</span>
            ) : (
              <span>Paste your data into the textarea below.</span>
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder="Enter your data here..."
            className="h-40 resize-none"
            value={config}
            onChange={(e) => setConfig(e.target.value)}
            onPaste={(e) => importConfig(e.clipboardData.getData("text/plain"))}
          />
        </div>
        <DialogFooter>
          <button
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-8 gap-1",
              className
            )}
            onClick={() => importConfig(config)}
            {...props}
          >
            <UploadIcon className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Import
            </span>
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ThemeButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { theme, setTheme } = useTheme();

  const swapTheme = () => {
    if (theme === "dark") {
      return setTheme("light");
    }

    return setTheme("dark");
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-8 gap-1",
        className
      )}
      onClick={swapTheme}
      {...props}
    >
      {theme !== "light" && <Sun className="size-4" />}
      {theme === "light" && <Moon className="size-4" />}
    </button>
  );
}
