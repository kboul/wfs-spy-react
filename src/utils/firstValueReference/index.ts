import hasGeometry from "../hasGeometry";
import getFullTypename from "../getFullTypename";
import { AttrNamesTypes } from "../../wfsMetadata/models";

export default function firstValueReference(
  typename: string,
  valueReferences: AttrNamesTypes
): string {
  const fullTypename = getFullTypename(typename);
  const attrNamesList = valueReferences?.names[fullTypename];
  const attrTypesList = valueReferences?.types[fullTypename];

  let valueReference = "";
  if (attrTypesList)
    valueReference = hasGeometry(attrTypesList[0])
      ? attrNamesList[1]
      : attrNamesList[0];
  return valueReference;
}
