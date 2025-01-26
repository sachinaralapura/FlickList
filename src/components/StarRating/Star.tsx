import { StarProps } from "./Star.types";

function Star({
  onRate,
  selected,
  onHoverIn,
  onHoverOut,
  color,
  size,
  strokeWidth = "0.5",
  strokeColor = "currentColor",
  viewBox,
}: StarProps) {
  return (
    <span onClick={onRate} onMouseOver={onHoverIn} onMouseOut={onHoverOut}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={`${viewBox?.x} ${viewBox?.y} ${viewBox?.width} ${viewBox?.height}`}
        fill={selected ? color : "none"}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </span>
  );
}

export default Star;
