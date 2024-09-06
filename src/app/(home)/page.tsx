import { FilePlus2 } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Main = dynamic(() => import("@/app/(home)/page.client"), { ssr: false });
const Frames = dynamic(() => import("@/components/frames"), { ssr: false });

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
        <Link
          href="/"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-8 gap-2 mb-4"
        >
          <FilePlus2 className="size-4" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Create
          </span>
        </Link>
        <Frames />
      </aside>
      <Main url={searchParams.url} />
    </div>
  );
}
