import { toast } from 'react-toastify';

import tags from '../config/tags';

const maxAttrValuesLength = 20000;

const noAttrValues = {
    valueCount: '-',
    minValue: 'no value',
    maxValue: 'no value',
    attrValues: []
};

const toasts = {
    tooManyAttrValues:
        'WfsSpy does not support services with more than 20000 attribute values.',
    noAttrValues:
        'The selected typename & valueReference do not have attribute values.'
};

export default function extractAttValues(
    getPropValueResp: XMLDocument
): {
    valueCount: string;
    minValue: string | undefined;
    maxValue: string | undefined;
    attrValues: string[];
} {
    const member = getPropValueResp.querySelectorAll(tags.member);
    const memberLength = member?.length;

    if (memberLength <= maxAttrValuesLength) {
        if (member && member[0]) {
            const valueCount = memberLength;
            const attrValues: string[] = [];
            member.forEach(m => {
                if (m.textContent) attrValues.push(m.textContent);
            });
            return {
                valueCount: valueCount.toString(),
                minValue: member[0].textContent?.trim(),
                maxValue: member[valueCount - 1].textContent?.trim(),
                attrValues: Array.from(new Set(attrValues))
            };
        }
        if (member && !member[0]) {
            toast.info(toasts.noAttrValues);
            return noAttrValues;
        }
    } else if (member.length > maxAttrValuesLength) {
        toast.info(toasts.tooManyAttrValues);
        return {
            valueCount: '-',
            minValue: 'not supported',
            maxValue: 'not supported',
            attrValues: []
        };
    }
    if (memberLength === 0) return noAttrValues;
    return { valueCount: '', minValue: '', maxValue: '', attrValues: [] };
}
