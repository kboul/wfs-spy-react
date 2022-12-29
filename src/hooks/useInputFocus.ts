import { useRef, useState, useEffect } from "react";

import { colors } from "../constants";

export default function useInputFocus() {
  const urlRef = useRef<HTMLInputElement>(null);
  const [urlBackground, setUrlBackground] = useState<string>(
    colors.lightPurpleHex
  );

  useEffect(() => urlRef?.current?.focus(), []);

  const handleFocus = () => {
    urlRef.current?.focus();
    setUrlBackground(colors.lightPurpleHex);
  };

  const handleBlur = () => {
    urlRef.current?.blur();
    setUrlBackground(colors.whiteHex);
  };

  return { urlRef, urlBackground, handleFocus, handleBlur };
}
