import { FilePlus2, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/app/(home)/page.client"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-1 flex-col transition-all">
      <div className="flex-1">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-2 text-muted-foreground text-opacity-35">
            <Loader2 className="animate-spin" />
            <p className="text-sm uppercase font-extrabold mt-2">Loading...</p>
          </div>
        </div>
      </div>
      <div className="border-t bg-muted/40 p-4 sm:p-6 transition-all">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center h-10 bg-muted rounded" />

          <div className="text-muted-foreground flex items-center h-8 bg-muted rounded" />
          <span className="text-[10px] text-muted-foreground text-opacity-35 uppercase font-extrabold mt-2">
            Click into the text edit the values
          </span>
        </div>
      </div>
    </div>
  ),
});

const Frames = dynamic(() => import("@/components/frames"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col gap-2">
      <div className="text-muted-foreground flex items-center h-16 bg-muted rounded" />
      <div className="text-muted-foreground flex items-center h-16 bg-muted rounded" />
      <div className="text-muted-foreground flex items-center h-16 bg-muted rounded" />
      <div className="text-muted-foreground flex items-center h-16 bg-muted rounded" />
    </div>
  ),
});

export default function Page({
  searchParams,
}: {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string;
  };
}) {
  return (
    <div className="flex flex-1">
      <aside className="hidden w-64 flex-col border-r bg-muted/40 p-4 sm:flex gap-2">
        <a
          href="/"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-8 gap-2 mb-4"
        >
          <FilePlus2 className="size-4" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Create
          </span>
        </a>
        <Frames />
      </aside>
      <Main url={searchParams.url} />
    </div>
  );
}
