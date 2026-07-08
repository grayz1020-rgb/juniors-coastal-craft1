type Props = {
  className?: string;
  flip?: boolean;
  fill?: string;
};

export function WaveDivider({ className = "", flip = false, fill = "var(--color-background)" }: Props) {
  return (
    <div
      aria-hidden
      className={`w-full leading-none ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-[60px] w-full sm:h-[90px]"
      >
        <path
          d="M0,32 C240,80 480,0 720,32 C960,64 1200,96 1440,48 L1440,90 L0,90 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
