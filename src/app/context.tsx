"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useCallback,
    useContext,
} from "react";
import { useLocalStorage } from "usehooks-ts";

export interface FrameContent {
  title?: string;
  url: string;
}

interface FrameContextType {
  frames: FrameContent[];
  setFrames: Dispatch<SetStateAction<FrameContent[]>>;
  findFrameByUrl: (url: string) => FrameContent | undefined;
  moveToFrame: (url: string) => void;
  removeByUrl: (url: string) => void;
  clear: () => void;
  exportToClipboard: () => void;
}

export const FrameContext = createContext<FrameContextType>(
  {} as FrameContextType
);

type ContextProviderProps = {
  children?: ReactNode;
};

export const FramesProvider = ({ children }: ContextProviderProps) => {
  const [frames, setFrames, removeValue] = useLocalStorage<FrameContent[]>(
    "iframe-wrapper-frames",
    []
  );

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const findFrameByUrl = useCallback(
    (url: string) => {
      return frames.find((frame) => frame.url === url);
    },
    [frames]
  );

  const moveToFrame = (url: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("url", url);

    router.push(pathname + "?" + params.toString());
  };

  const removeByUrl = (url: string) => {
    setFrames((frames) => frames.filter((frame) => frame.url !== url));
    const paramUrl = searchParams.get("url");

    if (paramUrl === url) {
      router.push("/");
    }
  };

  const exportToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(frames));
  };

  return (
    <FrameContext.Provider
      value={{
        frames,
        setFrames,
        findFrameByUrl,
        moveToFrame,
        removeByUrl,
        clear: removeValue,
        exportToClipboard,
      }}
    >
      {children}
    </FrameContext.Provider>
  );
};

export const useFrame = () => useContext(FrameContext);
