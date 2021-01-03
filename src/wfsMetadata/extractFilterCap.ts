import parseXML from './parseXML';

export default function extractFilterCap(
    xmlString: string,
    operator: string
): string[] {
    const getCapResp: XMLDocument = parseXML(xmlString);

    if (!getCapResp) return [];

    const operatorTags = getCapResp.querySelectorAll(operator);
    const operands: string[] = [];
    if (operatorTags.length) {
        operatorTags.forEach(operItem => {
            const operItemAttr = operItem.attributes;
            if (operItemAttr && operItemAttr[0] && operItemAttr[0].textContent)
                operands.push(operItemAttr[0].textContent);
        });
    }

    return operands;
}
