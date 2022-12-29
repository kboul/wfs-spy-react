import parseXML from "./parseXML";
import { tags } from "../constants";

export default function extractFiltAttrValues(xmlString: string): string {
  const getPropValFiltResp = parseXML(xmlString);
  return getPropValFiltResp.querySelectorAll(tags.member).length.toString();
}
