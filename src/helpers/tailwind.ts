export type Variant = "amber" | "yellow" | "white" | "black";
export type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const getBackgroundColor = (variant: string, shade: number): string => {
  switch (variant + shade) {
    case "amber400":
      return "bg-amber-400";
    case "amber500":
      return "bg-amber-500";

    default:
      return "bg-white";
  }
};

export const getBackgroundColorHover = (
  variant: string,
  shade: number
): string => {
  switch (variant + shade) {
    case "amber400":
      return "hover:bg-amber-400";
    case "amber500":
      return "hover:bg-amber-500";

    default:
      return "hover:bg-white";
  }
};

export const getTextColor = (variant: string, shade: number): string => {
  if (variant === "white") {
    return "text-white";
  } else if (variant === "black") {
    return "text-black";
  }

  switch (variant + shade) {
    case "amber400":
      return "text-amber-400";

    default:
      return "text-black";
  }
};