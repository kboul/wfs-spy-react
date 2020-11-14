import { tags } from '../constants';

export default function extractAcceptVersions(
    getCapResp: XMLDocument
): string[] {
    if (!getCapResp) return [];

    const acceptVersionsTag = getCapResp.querySelector(tags.acceptVersions);
    const acceptVersions: string[] = [];

    const acceptVersionChildren = acceptVersionsTag?.children[0]?.children;
    if (acceptVersionChildren) {
        Array.from(acceptVersionChildren).forEach(child => {
            if (child.textContent) acceptVersions.push(child.textContent);
        });
    } else {
        const acceptVersionOneChild = acceptVersionsTag?.children;
        if (acceptVersionOneChild) {
            Array.from(acceptVersionOneChild).forEach(child => {
                if (child.textContent) acceptVersions.push(child.textContent);
            });
        }
    }

    return acceptVersions;
}
