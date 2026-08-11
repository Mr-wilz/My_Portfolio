import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs text-zinc-600">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
