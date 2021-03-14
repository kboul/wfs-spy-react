/* eslint-disable no-param-reassign */
import buildXmlNodes from '../buildXmlNodes';

export default function formDecoratedXml(xml: XMLDocument, level: number) {
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
        '\n'
    )}</span><span style='color:black'><b>&gt;</b></span>`; // &lt; stands for < and &gt; stands for >

    level = 1;
    xmlOutput += buildXmlNodes(rootElement, level);
    level = 0;

    xmlOutput += `<br><span style='color:black'><b>&lt;/</b></span><span style='color:brown'><b>${rootElement.nodeName}</b></span><span style='color:black'><b>&gt;</b></span>`;

    return xmlOutput;
}
