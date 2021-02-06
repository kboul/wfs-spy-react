import parseXML from './parseXML';
import { AttrNamesTypes } from './models';
import globalConsts from '../config';

const { tags } = globalConsts;

export default function extractAttrNamesTypes(
    xmlString: string
): AttrNamesTypes {
    const descFeatTypeResp: XMLDocument = parseXML(xmlString);

    const valueReferences: AttrNamesTypes = {
        names: {},
        types: {}
    };

    if (!descFeatTypeResp) return valueReferences;

    const complexTypeTags = descFeatTypeResp.querySelectorAll(tags.complexType);
    const sequenceTags = descFeatTypeResp.querySelectorAll(tags.sequence);

    if (complexTypeTags.length > 0) {
        complexTypeTags.forEach((complexType, complexTypeIndex) => {
            const complexTypeAttrName = complexType.getAttribute(tags.name);
            if (complexType && complexTypeAttrName) {
                valueReferences.names[complexTypeAttrName] = new Array(
                    sequenceTags[complexTypeIndex].children.length
                );

                valueReferences.types[complexTypeAttrName] = new Array(
                    sequenceTags[complexTypeIndex].children.length
                );

                const sequenceTagsChildren =
                    sequenceTags[complexTypeIndex].children;

                if (sequenceTags && sequenceTagsChildren) {
                    Array.from(sequenceTagsChildren).forEach(
                        (sequence, sequenceIndex) => {
                            if (
                                sequence &&
                                complexType &&
                                complexTypeAttrName
                            ) {
                                // Store attribute names as an asscociative array
                                valueReferences.names[complexTypeAttrName][
                                    sequenceIndex
                                ] = sequenceTagsChildren[
                                    sequenceIndex
                                ].getAttribute(tags.name);

                                // Store attribute types as an asscociative array
                                valueReferences.types[complexTypeAttrName][
                                    sequenceIndex
                                ] = sequenceTagsChildren[
                                    sequenceIndex
                                ].getAttribute(tags.type);
                            }
                        }
                    );
                }
            }
        });
    }

    return valueReferences;
}
