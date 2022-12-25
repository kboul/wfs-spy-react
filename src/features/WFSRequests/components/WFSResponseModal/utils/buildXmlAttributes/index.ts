export default function buildXmlAttributes(childNode: any): string {
  let i;
  let txt = "";

  const x = childNode.attributes;

  for (i = 0; i < x.length; i++) {
    if (x[i].name === "style") return txt;
    txt +=
      ` <span style='color:black'><b>${x[i].name}=</b></span>` +
      `<span style='color:blue'>"${x[i].value}"</span>`;
  }
  return txt;
}
