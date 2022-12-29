import parseXML from "./parseXML";
import globalConsts, { tags } from "../constants";

const { noOption } = globalConsts;

export default function extractTypenames(data: string): string[] {
  if (!data) return [];

  const typenamesTags = parseXML(data).querySelectorAll(tags.featureTypeName);
  const typenames: string[] = [noOption];

  if (typenamesTags) {
    typenamesTags.forEach((tag) => {
      if (tag.textContent) typenames.push(tag.textContent);
    });
  }

  return typenames;
}
