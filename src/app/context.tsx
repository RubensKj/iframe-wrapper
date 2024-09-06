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

interface Importation {
  success: boolean;
  error?: string;
}

interface FrameContextType {
  frames: FrameContent[];
  setFrames: Dispatch<SetStateAction<FrameContent[]>>;
  findFrameByUrl: (url: string) => FrameContent | undefined;
  moveToFrame: (url: string) => void;
  removeByUrl: (url: string) => void;
  clear: () => void;
  exportToClipboard: () => void;
  importFrames: (jsonData: string) => Importation;
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
      window.location.href = "/";
    }
  };

  const exportToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(frames));
  };

  const importFrames = (
    jsonData: string
  ): {
    success: boolean;
    error?: string;
  } => {
    try {
      const importData = JSON.parse(jsonData) as FrameContent[];

      setFrames(importData);

      return {
        success: true,
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return {
        success: false,
        error: err.message,
      };
    }
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
        importFrames,
      }}
    >
      {children}
    </FrameContext.Provider>
  );
};

export const useFrame = () => useContext(FrameContext);
