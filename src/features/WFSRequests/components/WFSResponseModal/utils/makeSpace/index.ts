export default function makeSpace(level: number): string {
  let i;
  let txt = "";

  for (i = 0; i < level; i++) txt += " &nbsp;&nbsp;&nbsp;";
  return txt;
}
