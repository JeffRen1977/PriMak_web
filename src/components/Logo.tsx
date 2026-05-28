import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
  height?: number;
};

export default function Logo({ className = "", height = 44 }: LogoProps) {
  return (
    <Link to="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <img
        src="/logo.png"
        alt="PriMarkA"
        height={height}
        width={Math.round(height * (1024 / 356))}
        className="h-auto w-auto max-w-[min(220px,55vw)] rounded-sm object-contain object-left"
        style={{ height }}
      />
    </Link>
  );
}
