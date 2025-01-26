export type StarType = {
  maxRating?: number;
  size?: string;
  color?: string;
  strokeWidth?: string;
  strokeColor?: string;
  viewBox?: { x: number; y: number; width: number; height: number };
};

export type StarProps = {
  onRate: () => void;
  selected: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
} & StarType;

export type StarRatingProps = {
  onRate: (rating: number) => void;
  defaultRating?: number;
  className?: string;
} & StarType;
