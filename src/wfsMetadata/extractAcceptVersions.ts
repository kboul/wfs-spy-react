import globalConsts from "../constants";
import parseXML from "./parseXML";

const { tags } = globalConsts;

export default function extractAcceptVersions(xmlString: string): string[] {
  const getCapResp: XMLDocument = parseXML(xmlString);

  if (!getCapResp) return [];

  const acceptVersionsTag = getCapResp.querySelector(tags.acceptVersions);
  const acceptVersions: string[] = [];

  const acceptVersionChildren = acceptVersionsTag?.children[0]?.children;
  if (acceptVersionChildren) {
    Array.from(acceptVersionChildren).forEach((child) => {
      if (child.textContent) acceptVersions.push(child.textContent);
    });
  } else {
    const acceptVersionOneChild = acceptVersionsTag?.children;
    if (acceptVersionOneChild) {
      Array.from(acceptVersionOneChild).forEach((child) => {
        if (child.textContent) acceptVersions.push(child.textContent);
      });
    }
  }

  return acceptVersions;
}
