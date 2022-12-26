/* eslint-disable no-param-reassign */
function buildXmlAttributes(childNode: any): string {
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

function buildXmlNodes(
  rootElement: XMLDocument | ChildNode,
  level: number
): string {
  let i;
  let rootElementChildNode: ChildNode;
  let txt;
  txt = "";
  const rootElementChildNodes: NodeListOf<ChildNode> = rootElement.childNodes;

  for (i = 0; i < rootElementChildNodes.length; i++) {
    rootElementChildNode = rootElementChildNodes[i];
    if (rootElementChildNode.nodeType === 1) {
      if (rootElementChildNode.nodeName === "parsererror") txt += "<br>";
      txt += `<br>${makeSpace(level)}`;

      txt += `<span style='color:black'><b>&lt;</b></span><span style='color:brown'><b>${
        rootElementChildNode.nodeName
      }</b></span>${buildXmlAttributes(
        rootElementChildNode
      )}<span style='color:black'><b>&gt;</b></span>`;

      level++;
      txt += buildXmlNodes(rootElementChildNode, level);
      level--;

      if (rootElementChildNode.nodeName === "parsererror")
        txt += `<br>${makeSpace(level)}`;
      txt += `<span style='color:black'><b>&lt;/</b></span><span style='color:brown'><b>${rootElementChildNode.nodeName}</b></span><span style='color:black'><b>&gt;</b></span>`;

      if (rootElementChildNode.nodeName === "parsererror") txt += "<br>";
    } else if (rootElementChildNode.nodeType === 3) {
      txt += rootElementChildNode.nodeValue;
    } else {
      // when nodeType is anything else than 1, 3 do not display nodeType number in the box
      txt += rootElementChildNode.nodeValue; // y.nodeType + y.nodeValue (initial)
    }
  }
  return txt;
}

function formDecoratedXml(xml: XMLDocument, level: number) {
  const rootElement = xml.documentElement;
  const totalXmlAttributes = [];

  // add all XML Namespace Prefixes + URIs
  if (rootElement) {
    // for cases where we receive a 500 error avoid step into conditional and thus the execution of all functions
    const xmlAttributes = xml.children[0].attributes;
    const xmlHeaderNames = [];
    const xmlHeaderValues = [];

    for (let t = 0; t < xmlAttributes.length; t++) {
      xmlHeaderNames[t] = xmlAttributes[t].name;
      xmlHeaderValues[t] = xmlAttributes[t].textContent;
    }

    for (let i = 0; i < xmlHeaderNames.length; i++) {
      if (xmlHeaderNames[i] && xmlHeaderValues[i]) {
        totalXmlAttributes[i] =
          `<span style='color:black'><b>${xmlHeaderNames[i]}</b></span>` +
          `<span style="color:black"><b>=</b></span>` +
          `<span style="color:blue">"${xmlHeaderValues[i]}</span>` +
          `<span style="color:blue">"</span>`;
      }
    }
  }

  let xmlOutput = `<span style='color:black'><b>&lt;</b></span><span style='color:brown'><b>${
    rootElement.nodeName
  }</b> ${totalXmlAttributes.join(
    "\n"
  )}</span><span style='color:black'><b>&gt;</b></span>`; // &lt; stands for < and &gt; stands for >

  level = 1;
  xmlOutput += buildXmlNodes(rootElement, level);
  level = 0;

  xmlOutput += `<br><span style='color:black'><b>&lt;/</b></span><span style='color:brown'><b>${rootElement.nodeName}</b></span><span style='color:black'><b>&gt;</b></span>`;

  return xmlOutput;
}

function makeSpace(level: number): string {
  let i;
  let txt = "";

  for (i = 0; i < level; i++) txt += " &nbsp;&nbsp;&nbsp;";
  return txt;
}

export { formDecoratedXml };
