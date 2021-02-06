import { FeatureTypes } from './models';
import globalConsts from '../config';
import parseXML from './parseXML';

const { tags } = globalConsts;

export default function extractFeatureTypes(xmlString: string): FeatureTypes[] {
    const getCapResp: XMLDocument = parseXML(xmlString);

    const featureTypes: FeatureTypes[] = [];

    if (!getCapResp) return featureTypes;

    const featureTypeTags = getCapResp.querySelectorAll(tags.featureType);
    if (featureTypeTags.length) {
        featureTypeTags.forEach(featureType => {
            const featName = featureType.querySelector(tags.featureTypeName);
            const featTitle = featureType.querySelector(tags.title);
            const featAbstract = featureType.querySelector(tags.abstract);
            const featDefaultCRS = featureType.querySelector(tags.defaultCRS);
            const featLowerCorner = featureType.querySelector(tags.lowerCorner);
            const featUpperCorner = featureType.querySelector(tags.upperCorner);
            const obj: FeatureTypes = {};

            if (featName?.textContent) obj.name = featName.textContent;
            if (featTitle?.textContent) obj.title = featTitle.textContent;
            if (featAbstract?.textContent)
                obj.abstract = featAbstract.textContent;
            if (featDefaultCRS?.textContent)
                obj.defaultCRS = featDefaultCRS.textContent;
            if (featLowerCorner?.textContent)
                obj.lowerCorner = featLowerCorner.textContent;
            if (featUpperCorner?.textContent)
                obj.upperCorner = featUpperCorner.textContent;

            featureTypes.push(obj);
        });
    }

    return featureTypes;
}
