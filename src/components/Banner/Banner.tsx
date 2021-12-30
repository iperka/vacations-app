import { XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import {
  getBackgroundColor,
  getBackgroundColorHover,
  getTextColor,
  Variant,
} from "../../helpers/tailwind";

type BannerProps = {
  variant: Variant;
  open?: boolean;
  children: React.ReactNode;
};

const Banner = (props: BannerProps): JSX.Element => {
  const { variant } = props;
  const [open, setOpen] = useState(props.open === undefined);

  return (
    <div
      data-testid="banner"
      className={`relative ${getBackgroundColor(variant, 400)} ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className={`font-medium ${getTextColor("black", 50)}`}>
            {props.children}
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            data-testid="btnClose"
            onClick={() => {
              setOpen(false);
            }}
            type="button"
            className={`flex p-2 rounded-md ${getBackgroundColorHover(
              variant,
              500
            )} focus:outline-none focus:ring-2 focus:ring-black`}
          >
            <span className="sr-only">Dismiss</span>
            <XIcon
              className={`h-6 w-6 ${getTextColor("black", 50)}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
