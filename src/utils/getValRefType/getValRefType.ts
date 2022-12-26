import { AttrNamesTypes } from "../../wfsMetadata/models";
import getFullTypename from "../getFullTypename/getFullTypename";

interface ArgsType {
  typename: string;
  valueReference: string;
  valueReferences: AttrNamesTypes;
}

export default function getValRefType({
  typename,
  valueReference,
  valueReferences
}: ArgsType): string {
  const attrNames: string[] = valueReferences.names[getFullTypename(typename)];

  if (
    !typename ||
    !valueReference ||
    Object.keys(valueReferences.names).length === 0 ||
    !attrNames
  )
    return "";

  const typeIndex = attrNames.findIndex((el) => el === valueReference);
  const type = valueReferences.types[getFullTypename(typename)][typeIndex];
  return type?.replace("xsd:", "");
}
