interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 28, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rounded square border */}
      <rect
        x="10"
        y="6"
        width="70"
        height="70"
        rx="13"
        stroke="currentColor"
        strokeWidth="5.5"
      />

      {/* A – left leg with upward arc */}
      <path
        d="M46 18 L24 70 Q12 70 16 38"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* A – right leg extending beyond the square */}
      <path
        d="M46 18 L68 70 L78 90"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* A – crossbar */}
      <path
        d="M32 50 L60 50"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
