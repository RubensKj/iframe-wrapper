"use client";

import { useFrame } from "@/app/context";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function Frames({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { frames, removeByUrl } = useFrame();

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden" {...props}>
      {frames.map((frame) => (
        <div key={frame.url} className="flex w-full mb-4">
          <Link
            href={`/?url=${frame.url}`}
            className="flex flex-col w-[calc(100%-32px)] gap-0.5 border border-r-0 rounded-r-none rounded px-2 py-3 transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
          >
            <div className="font-semibold">{frame.title}</div>
            <div
              className="text-sm text-muted-foreground text-nowrap text-ellipsis overflow-hidden"
              title={frame.url}
            >
              {frame.url}
            </div>
          </Link>
          <button
            onClick={() => removeByUrl(frame.url)}
            className=" flex-1 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border rounded-l-none border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md w-8 h-auto gap-2"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
