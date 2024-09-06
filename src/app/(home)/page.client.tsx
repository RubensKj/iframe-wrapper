"use client";

import { Check, TrafficCone } from "lucide-react";
import { useState } from "react";
import { FrameContent, useFrame } from "../context";

export default function Main({ url }: { url: string }) {
  const { findFrameByUrl } = useFrame();

  const frame = findFrameByUrl(url);

  return (
    <main className="flex flex-1 flex-col transition-all">
      <div className="flex-1">
        <Framer frame={frame} target="_self" />
      </div>
      <div className="border-t bg-muted/40 p-4 sm:p-6 transition-all">
        <PrimaryContent frame={frame} />
      </div>
    </main>
  );
}

export function Framer({
  frame,
  ...props
}: React.IframeHTMLAttributes<HTMLIFrameElement> & {
  frame?: FrameContent;
  target?: string;
}) {
  if (!frame) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-2 text-muted-foreground text-opacity-35">
          <TrafficCone />
          <p className="text-sm uppercase font-extrabold mt-2">
            Frame not found
          </p>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={frame.url}
      allow="fullscreen"
      className="w-full h-full"
      sandbox="allow-scripts allow-same-origin"
      {...props}
    />
  );
}

export function PrimaryContent({
  frame: frameParam,
}: {
  frame?: FrameContent;
}) {
  const [frame] = useState<FrameContent | undefined>(frameParam);

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [title, setTitle] = useState(
    frame && frame.title ? frame.title : "Click me to setup a title"
  );
  const [url, setUrl] = useState(frame ? frame.url : "https://example.com");

  const { setFrames, moveToFrame } = useFrame();

  const handleTitleSave = () => {
    setIsEditing(false);

    if (!frame) {
      setFrames((frames) => [
        ...frames.filter((framy) => framy.url !== url),
        {
          title: title,
          url: url,
        },
      ]);
      moveToFrame(url);
      return;
    }

    setFrames((frames) => [
      ...frames.filter((framy) => framy.url !== frame.url),
      {
        ...frame,
        title: title,
      },
    ]);
  };

  const handleUrlSave = () => {
    setIsEditingUrl(false);

    if (!frame) {
      setFrames((frames) => [
        ...frames.filter((fra) => fra.url !== url),
        {
          title: title,
          url: url,
        },
      ]);
      moveToFrame(url);
      return;
    }

    setFrames((frames) => [
      ...frames.filter((fra) => fra.url !== frame.url),
      {
        ...frame,
        url: url,
      },
    ]);
    moveToFrame(url);
  };

  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center h-10">
        {isEditing ? (
          <div className="flex items-center gap-2">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleTitleSave}
              size={title.length}
              className="flex w-auto rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-semibold"
            />
            <button
              onClick={handleTitleSave}
              tabIndex={1}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-[38px] gap-2"
            >
              <Check className="size-4" />
            </button>
          </div>
        ) : (
          <div
            className="font-semibold text-xl cursor-text"
            onClick={() => setIsEditing(true)}
          >
            {title}
          </div>
        )}
      </div>

      <div className="text-muted-foreground flex items-center h-8">
        {isEditingUrl ? (
          <div className="flex items-center gap-2">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onBlur={handleUrlSave}
              size={url.length}
              className="flex w-auto rounded-md border border-input bg-background px-3 py-1.5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              onClick={handleUrlSave}
              tabIndex={0}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-[34px] gap-2"
            >
              <Check className="size-4" />
            </button>
          </div>
        ) : (
          <div className="cursor-text" onClick={() => setIsEditingUrl(true)}>
            {url}
          </div>
        )}
      </div>
      <span className="text-[10px] text-muted-foreground text-opacity-35 uppercase font-extrabold mt-2">
        Click into the text edit the values
      </span>
    </div>
  );
}
