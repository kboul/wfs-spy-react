import { AttrNamesTypes } from '../../../shared/models';
import { selectedTypename } from '../../../shared/utils';

const getValRefType = (
    typename: string,
    valueReference: string,
    valueReferences: AttrNamesTypes
): string => {
    if (
        !typename ||
        !valueReference ||
        Object.keys(valueReferences.names).length === 0
    )
        return '';

    const typeIndex = valueReferences.names[
        selectedTypename(typename)
    ].findIndex((el: string) => el === valueReference);
    const type = valueReferences.types[selectedTypename(typename)][typeIndex];
    return type.replace('xsd:', '');
};

export { getValRefType };
