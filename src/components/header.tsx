import { ExportButton, ImportButton, ThemeButton } from "./header.client";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background px-4 sm:h-16 sm:px-6">
      <a href="/" className="flex items-center gap-2">
        <MountainIcon className="h-6 w-6" />
        <span className="font-semibold">Frame Wrapper</span>
      </a>
      <div className="flex items-center gap-2">
        <ImportButton />
        <ExportButton />
        <ThemeButton />
      </div>
    </header>
  );
}

function MountainIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
