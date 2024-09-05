"use client";

import { useState } from "react";

export function PrimaryContent() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [title, setTitle] = useState("Sidebar Title");
  const [url, setUrl] = useState("https://example.com");

  const handleTitleEdit = () => {
    setIsEditing(true);
  };
  const handleTitleSave = () => {
    setIsEditing(false);
  };

  const handleDescriptionEdit = () => {
    setIsEditingUrl(true);
  };
  const handleDescriptionSave = () => {
    setIsEditingUrl(false);
  };

  return (
    <div className="flex flex-col cursor-pointer">
      <div
        className="flex items-center h-10 cursor-pointer"
        onMouseEnter={handleTitleEdit}
        onMouseLeave={handleTitleSave}
      >
        {isEditing ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleTitleSave}
            size={title.length}
            className="flex w-auto rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-semibold"
          />
        ) : (
          <div className="font-semibold text-xl">{title}</div>
        )}
      </div>

      <div
        className="text-muted-foreground flex items-center h-8 cursor-pointer"
        onMouseEnter={handleDescriptionEdit}
        onMouseLeave={handleDescriptionSave}
      >
        {isEditingUrl ? (
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onBlur={handleDescriptionSave}
            size={url.length}
            className="flex w-auto rounded-md border border-input bg-background px-3 py-1.5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        ) : (
          <div className="">{url}</div>
        )}
      </div>
      <span className="text-[10px] text-muted-foreground text-opacity-35 uppercase font-extrabold mt-2">
        Hover to edit the values
      </span>
    </div>
  );
}
