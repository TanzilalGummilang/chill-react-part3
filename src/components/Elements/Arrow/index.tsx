interface ArrowProps {
  direction: "left" | "right";
}

export default function Arrow({ direction }: ArrowProps) {
  const isLeft = direction === "left";

  const buttonPositionClasses = isLeft
    ? "left-0 -translate-x-1/2"
    : "right-0 translate-x-1/2";

  const imageRotationClass = isLeft ? "" : "rotate-180";

  return (
    <button
      className={`
        carousel-arrow-button btn 
        absolute top-1/2 transform -translate-y-1/2
        w-11 h-11 rounded-full 
        hidden lg:flex justify-center items-center 
        bg-other__body z-10 border border-text__light-secondary__b 
        ${buttonPositionClasses}
      `}
    >
      <img
        src="/images/arrow-left.svg"
        alt={`arrow-${direction}`}
        className={`filter brightness-0 invert ${imageRotationClass}`}
      />
    </button>
  );
}
