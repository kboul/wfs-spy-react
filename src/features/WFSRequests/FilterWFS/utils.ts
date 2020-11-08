import { AttrNamesTypes } from '../../../shared/models';
import { getFullTypename } from '../../../shared/utils';

const getValRefType = (
    typename: string,
    valueReference: string,
    valueReferences: AttrNamesTypes
): string => {
    const attrNames: string[] =
        valueReferences.names[getFullTypename(typename)];

    if (
        !typename ||
        !valueReference ||
        Object.keys(valueReferences.names).length === 0 ||
        !attrNames
    )
        return '';

    const typeIndex = attrNames.findIndex(el => el === valueReference);
    const type = valueReferences.types[getFullTypename(typename)][typeIndex];
    return type?.replace('xsd:', '');
};

export { getValRefType };
