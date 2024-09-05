import { PrimaryContent } from "@/app/(home)/page.client";

export default function Page() {
  return (
    <div className="flex flex-1">
      <aside className="hidden w-64 flex-col border-r bg-muted/40 p-4 sm:flex">
        <div className="mb-4 flex flex-col gap-1">
          <div className="font-semibold">Sidebar Title</div>
          <div className="text-muted-foreground">https://example.com</div>
        </div>
        <div className="flex-1 overflow-auto" />
      </aside>
      <main className="flex flex-1 flex-col transition-all">
        <div className="flex-1">
         <Framer target="_self" />
        </div>
        <div className="border-t bg-muted/40 p-4 sm:p-6 transition-all">
          <PrimaryContent />
        </div>
      </main>
    </div>
  );
}

function Framer(props: React.IframeHTMLAttributes<HTMLIFrameElement> & {
  target?: string
}) {
  return (
    <iframe src="https://embedme.top/embed/alpha/arthur-ashe-stadium-jannik-sinner-vs-daniil-medvedev/1" allow="fullscreen" className="w-full h-full" {...props} />
  )
}