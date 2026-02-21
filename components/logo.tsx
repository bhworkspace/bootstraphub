import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center text-lg font-bold tracking-tight">
      <span className="text-blue-600 dark:text-blue-400">b</span>
      <span>ootstrap</span>
      <span className="text-blue-600 dark:text-blue-400">h</span>
      <span>ub</span>
    </Link>
  );
}
