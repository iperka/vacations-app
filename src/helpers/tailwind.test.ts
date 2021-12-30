import {
  getBackgroundColor,
  getBackgroundColorHover,
  getTextColor,
  Shade,
  Variant,
} from "./tailwind";

const shades: Shade[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const variants: Variant[] = ["amber", "yellow", "white", "black"];

const backgroundMappings: {
  variant: Variant;
  shade: Shade;
  result: string;
}[] = [
  { variant: "amber", shade: 400, result: "bg-amber-400" },
  { variant: "amber", shade: 500, result: "bg-amber-500" },
];

const textMappings: {
  variant: Variant;
  shade: Shade;
  result: string;
}[] = [
  { variant: "amber", shade: 400, result: "text-amber-400" },
  ...shades.map(
    (shade) =>
      ({ variant: "white", shade, result: "text-white" } as {
        variant: Variant;
        shade: Shade;
        result: string;
      })
  ),
  ...shades.map(
    (shade) =>
      ({ variant: "black", shade, result: "text-black" } as {
        variant: Variant;
        shade: Shade;
        result: string;
      })
  ),
];

describe("helpers/tailwindcss", () => {
  describe("getBackgroundColor", () => {
    const defaultResult = "bg-white";
    variants.forEach((variant: Variant) => {
      shades.forEach((shade: Shade) => {
        const expectedResult =
          backgroundMappings.find(
            (mapping) => mapping.variant === variant && mapping.shade === shade
          )?.result || defaultResult;
        it(`should return ${expectedResult} if variant ${variant} and shade ${shade}`, () => {
          expect(getBackgroundColor(variant, shade)).toEqual(expectedResult);
        });
      });
    });
  });

  describe("getBackgroundColorHover", () => {
    const defaultResult = "bg-white";
    variants.forEach((variant: Variant) => {
      shades.forEach((shade: Shade) => {
        const expectedResult =
          backgroundMappings.find(
            (mapping) => mapping.variant === variant && mapping.shade === shade
          )?.result || defaultResult;
        it(`should return hover:${expectedResult} if variant ${variant} and shade ${shade}`, () => {
          expect(getBackgroundColorHover(variant, shade)).toEqual(
            "hover:" + expectedResult
          );
        });
      });
    });
  });

  describe("getTextColor", () => {
    const defaultResult = "text-black";
    variants.forEach((variant: Variant) => {
      shades.forEach((shade: Shade) => {
        const expectedResult =
          textMappings.find(
            (mapping) => mapping.variant === variant && mapping.shade === shade
          )?.result || defaultResult;
        it(`should return ${expectedResult} if variant ${variant} and shade ${shade}`, () => {
          expect(getTextColor(variant, shade)).toEqual(expectedResult);
        });
      });
    });
  });
});
