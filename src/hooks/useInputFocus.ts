import { useRef, useState, useEffect } from "react";

import globalConsts from "../constants";

const { colors } = globalConsts;

export default function useInputFocus() {
  const urlRef = useRef<HTMLInputElement>(null);
  const [urlBackground, setUrlBackground] = useState<string>(
    colors.lightPurple
  );

  useEffect(() => urlRef?.current?.focus(), []);

  const handleFocus = () => {
    urlRef.current?.focus();
    setUrlBackground(colors.lightPurple);
  };

  const handleBlur = () => {
    urlRef.current?.blur();
    setUrlBackground(colors.white);
  };

  return { urlRef, urlBackground, handleFocus, handleBlur };
}
