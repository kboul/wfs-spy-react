export default function getSizeAndOffset(windowWidth: number) {
  const windownWidthLimit = 1550;
  const size = windowWidth > windownWidthLimit ? 8 : 12;
  const offset = windowWidth > windownWidthLimit ? 2 : 1;
  return { size, offset };
}
