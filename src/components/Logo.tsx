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
        alt="PriMarkA Financial Group Inc."
        height={height}
        className="h-auto w-auto max-w-[min(280px,70vw)] object-contain object-left"
        style={{ height }}
      />
    </Link>
  );
}
