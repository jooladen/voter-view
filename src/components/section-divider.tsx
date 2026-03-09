type SectionDividerProps = {
  fill?: string;
  flip?: boolean;
};

export default function SectionDivider({
  fill = "#020617",
  flip = false,
}: SectionDividerProps) {
  return (
    <div
      className={`w-full leading-[0] ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[80px]"
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
