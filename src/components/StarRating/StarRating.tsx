import { useState } from "react";
import { StarRatingProps } from "./Star.types";
import Star from "./Star";

function StarRating({
  onRate,
  defaultRating = 0,
  maxRating = 5,
  color = "yellow",
  size = "24",
  strokeWidth = "0.5",
  strokeColor = "currentColor",
  viewBox = { x: 0, y: 0, width: 24, height: 24 },
  className = "",
}: StarRatingProps) {
  const [rating, setRating] = useState<number>(defaultRating);
  const [tempRating, setTempRating] = useState<number>(0);

  const handleRating = (r: number) => {
    setRating((_p) => r);
    onRate(r);
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "16px" }}
      className={className}
    >
      <div style={{ display: "flex", gap: "4px" }}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            selected={tempRating ? tempRating > i : rating > i}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
            strokeWidth={strokeWidth}
            strokeColor={strokeColor}
            viewBox={viewBox}
          />
        ))}
      </div>
    </div>
  );
}

export default StarRating;
