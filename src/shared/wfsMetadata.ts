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
    return wfsResponse.querySelector('Title')?.textContent;
};

const extractAcceptedVersions = (wfsResponse: XMLDocument): string[] => {
    const acceptedVersions: string[] = [];
    const acceptVersionTag = wfsResponse.querySelector(
        '[name="AcceptVersions"]'
    );
    const acceptVersionChildren: HTMLCollection | undefined =
        acceptVersionTag?.children[0]?.children;
    if (acceptVersionChildren) {
        Array.from(acceptVersionChildren).forEach((child: any) =>
            acceptedVersions.push(child.textContent)
        );
    }
    return acceptedVersions;
};

const extractAbstract = (wfsResponse: XMLDocument): string | null | undefined =>
    wfsResponse.querySelector('Abstract')?.textContent;

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
    providerName: any
): string => {
    //for tag contents containing www
    const tagNameW3 = wfsResponse.querySelector(providerName);
    if (tagNameW3) {
        if (tagNameW3.attributes[0].textContent !== '') {
            if (tagNameW3.attributes[0].textContent.indexOf('www') > -1) {
                return tagNameW3.attributes[0].textContent;
            }
        }
        if (tagNameW3.attributes[1]) {
            if (tagNameW3.attributes[1].textContent !== '') {
                if (tagNameW3.attributes[1].textContent.indexOf('www') > -1) {
                    //if the second attribute contains www...
                    return tagNameW3.attributes[1].textContent;
                }
            }
        }
    }
    return '';
};

const extractProvider = (wfsResponse: XMLDocument) => {
    const providerName = wfsResponse.querySelector('ProviderName');
    const serviceContact = wfsResponse.querySelector('ServiceContact');
    const providerNames: string[] = [];
    const providerValues: any = [];
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
    extractAcceptedVersions,
    extractProvider
};
