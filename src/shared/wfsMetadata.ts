import { allProviderNames, allProviderNamesW3 } from './constants';

const parseXML = (response: string): XMLDocument => {
    const parser = new DOMParser();
    return parser.parseFromString(response, 'text/xml');
};

const extractTypenames = (data: string): string[] => {
    const typenames = ['---'];
    const typenamesTags = parseXML(data).querySelectorAll('Name');
    if (typenamesTags) {
        typenamesTags.forEach((tag: any) => typenames.push(tag.textContent));
    }
    return typenames;
};

const extractTitle = (wfsResponse: XMLDocument): string | null | undefined => {
    const title = wfsResponse.querySelector('Title')?.textContent;
    if (title) return title;

    const allTitles = wfsResponse.querySelectorAll('Title');
    if (allTitles) {
        let title;
        Array.from(allTitles).forEach(t => {
            if (t.textContent !== '') title = t.textContent;
        });
        return title;
    }

    return '';
};

const extractAcceptVersions = (wfsResponse: XMLDocument): string[] => {
    const acceptVersions: string[] = [];
    const acceptVersionTag = wfsResponse.querySelector(
        '[name="AcceptVersions"]'
    );

    const acceptVersionChildren = acceptVersionTag?.children[0]?.children;
    if (acceptVersionChildren) {
        Array.from(acceptVersionChildren).forEach((child: any) =>
            acceptVersions.push(child.textContent)
        );
    } else {
        const acceptVersionOneChild = acceptVersionTag?.children;
        if (acceptVersionOneChild) {
            Array.from(acceptVersionOneChild).forEach((child: any) =>
                acceptVersions.push(child.textContent)
            );
        }
    }

    return acceptVersions;
};

const extractAbstract = (
    wfsResponse: XMLDocument
): string | null | undefined => {
    const abstract = wfsResponse.querySelector('Abstract')?.textContent;
    if (abstract) return abstract;

    const allAbstracts = wfsResponse.querySelectorAll('Abstract');
    if (allAbstracts) {
        let abstract;
        Array.from(allAbstracts).forEach(t => {
            if (t.textContent !== '') abstract = t.textContent;
        });
        return abstract;
    }

    return '';
};

const extractProviderValue = (
    wfsResponse: XMLDocument,
    providerName: string
): string | null => {
    const tagName = wfsResponse.querySelector(providerName);
    if (tagName) {
        if (tagName.textContent !== '') return tagName.textContent;
    }
    return '';
};

const extractProviderValueForW3 = (
    wfsResponse: XMLDocument,
    providerName: string
): string => {
    //for tag contents containing www
    const tagNameW3 = wfsResponse.querySelector(providerName);
    if (tagNameW3) {
        if (tagNameW3.attributes[0]) {
            const tagNameW3Value = tagNameW3.attributes[0].textContent;
            if (tagNameW3Value !== '' && tagNameW3Value) {
                if (tagNameW3Value.indexOf('www') > -1) return tagNameW3Value;
            }
        }
        if (tagNameW3.attributes[1]) {
            const tagNameW3Value = tagNameW3.attributes[1].textContent;
            if (tagNameW3Value !== '' && tagNameW3Value) {
                //if the second attribute contains www...
                if (tagNameW3Value.indexOf('www') > -1) return tagNameW3Value;
            }
        }
    }
    return '';
};

const extractProvider = (
    wfsResponse: XMLDocument
): { providerNames: string[]; providerValues: string[] } => {
    const providerName = wfsResponse.querySelector('ProviderName');
    const serviceContact = wfsResponse.querySelector('ServiceContact');
    if (!providerName?.textContent && !serviceContact?.textContent)
        return { providerNames: [], providerValues: [] };

    const providerNames: string[] = [];
    const providerValues: string[] = [];
    if (providerName?.textContent && serviceContact?.textContent) {
        allProviderNames.forEach(providerName => {
            const value = extractProviderValue(wfsResponse, providerName);
            if (value !== '' && value) {
                providerNames.push(providerName);
                providerValues.push(value);
            }
        });
        allProviderNamesW3.forEach(providerName => {
            const value = extractProviderValueForW3(wfsResponse, providerName);
            if (value !== '' && value) {
                providerNames.push(providerName);
                providerValues.push(value);
            }
        });
    }
    return {
        providerNames,
        providerValues
    };
};

export {
    parseXML,
    extractTypenames,
    extractTitle,
    extractAbstract,
    extractAcceptVersions,
    extractProvider
};
