import { XmlNamespaces } from "./models";
import parseXML from "./parseXML";

export default function extractXmlNamespaces(xmlString: string): XmlNamespaces {
  const getCapResp: XMLDocument = parseXML(xmlString);

  const { attributes } = getCapResp.children[0];
  const prefixes: string[] = [];
  const uris: string[] = [];

  // avoid 1st and last which is version and updateSequence respectively
  Array.from(attributes).forEach((attribute, index) => {
    if (
      attribute.name &&
      attribute.textContent &&
      !["version", "updateSequence"].includes(attribute.name)
    ) {
      prefixes[index] = attribute.name;
      uris[index] = attribute.textContent;
    }
  });

  return { prefixes, uris };
}
