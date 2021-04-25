/* eslint-disable no-param-reassign */
import buildXmlAttributes from '../buildXmlAttributes';
import makeSpace from '../makeSpace';

export default function buildXmlNodes(
    rootElement: XMLDocument | ChildNode,
    level: number
): string {
    let i;
    let rootElementChildNode: ChildNode;
    let txt;
    txt = '';
    const rootElementChildNodes: NodeListOf<ChildNode> = rootElement.childNodes;

    for (i = 0; i < rootElementChildNodes.length; i++) {
        rootElementChildNode = rootElementChildNodes[i];
        if (rootElementChildNode.nodeType === 1) {
            if (rootElementChildNode.nodeName === 'parsererror') txt += '<br>';
            txt += `<br>${makeSpace(level)}`;

            txt += `<span style='color:black'><b>&lt;</b></span><span style='color:brown'><b>${
                rootElementChildNode.nodeName
            }</b></span>${buildXmlAttributes(
                rootElementChildNode
            )}<span style='color:black'><b>&gt;</b></span>`;

            level++;
            txt += buildXmlNodes(rootElementChildNode, level);
            level--;

            if (rootElementChildNode.nodeName === 'parsererror')
                txt += `<br>${makeSpace(level)}`;
            txt += `<span style='color:black'><b>&lt;/</b></span><span style='color:brown'><b>${rootElementChildNode.nodeName}</b></span><span style='color:black'><b>&gt;</b></span>`;

            if (rootElementChildNode.nodeName === 'parsererror') txt += '<br>';
        } else if (rootElementChildNode.nodeType === 3) {
            txt += rootElementChildNode.nodeValue;
        } else {
            // when nodeType is anything else than 1, 3 do not display nodeType number in the box
            txt += rootElementChildNode.nodeValue; // y.nodeType + y.nodeValue (initial)
        }
    }
    return txt;
}
