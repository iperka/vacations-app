import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import React from "react";
import { useDarkMode } from "../../helpers/hooks";

const Toggle: React.FC = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <>
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {isDark ? (
          <SunIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MoonIcon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </>
  );
};

export default Toggle;
