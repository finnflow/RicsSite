export function OrganicShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flowing organic shape - top right */}
      <svg
        className="absolute -top-40 -right-40 w-[600px] h-[600px] text-[#E8DCC4] opacity-30"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M47.1,-65.3C59.9,-56.6,68.4,-42.3,74.5,-26.8C80.6,-11.3,84.3,5.4,81.6,21.2C78.9,37,69.8,51.9,57.3,61.8C44.8,71.7,28.9,76.6,12.3,77.8C-4.3,79,-21.6,76.5,-36.2,68.8C-50.8,61.1,-62.7,48.2,-70.3,33.1C-77.9,18,-81.2,0.7,-78.6,-15.5C-76,-31.7,-67.5,-46.8,-55.3,-55.7C-43.1,-64.6,-27.2,-67.3,-11.8,-69.5C3.6,-71.7,34.3,-74,47.1,-65.3Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Soft essence circles - bottom left */}
      <svg
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] text-[#C9B5A0] opacity-20"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="90" fill="currentColor" opacity="0.3" />
        <circle cx="120" cy="80" r="60" fill="currentColor" opacity="0.5" />
        <circle cx="80" cy="120" r="45" fill="currentColor" opacity="0.7" />
      </svg>

      {/* Flowing leaf shape - right side */}
      <svg
        className="absolute top-1/3 right-12 w-[350px] h-[350px] text-[#E8DCC4] opacity-25"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M100,30 Q140,50 155,90 Q170,130 140,160 Q110,190 80,170 Q50,150 45,110 Q40,70 70,45 Q100,30 100,30Z"
        />
      </svg>

      {/* Small decorative dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#D4A88C] opacity-40" />
      <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[#C9B5A0] opacity-30" />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-[#E8DCC4] opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 rounded-full bg-[#D4A88C] opacity-30" />
    </div>
  );
}
