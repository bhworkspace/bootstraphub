// components/Logo.tsx
import React from "react";
import Link from "next/link";

export default function Logo({ compact }: { compact?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <div className="w-10 h-10 rounded-md bg-linear-to-br from-brand-500 to-indigo-500 flex items-center justify-center text-white font-semibold">BH</div>
      {!compact && (
        <div className="leading-tight">
          <div className="text-lg font-semibold">BootstrapHub</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">Workspace</div>
        </div>
      )}
    </Link>
  );
}
