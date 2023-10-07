import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex h-60 flex-col items-center justify-center gap-2">
      <span className="text-lg text-white/50">&copy; 2023 by appdeliverd</span>
      <div className="flex gap-3">
        <Link
          className="text-white/60 transition-colors hover:text-white"
          href="/"
        >
          Impressum
        </Link>
        <Link
          className="text-white/60 transition-colors hover:text-white"
          href="/"
        >
          Datenschutz
        </Link>
      </div>
    </div>
  );
};
