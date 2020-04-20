import { IOperations, IProvider } from './models';

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

const extractProvider = (wfsResponse: XMLDocument): IProvider => {
    const providerName = wfsResponse.querySelector('ProviderName');
    const serviceContact = wfsResponse.querySelector('ServiceContact');
    const providerNames: string[] = [];
    const providerValues: string[] = [];

    if (providerName?.textContent && serviceContact?.textContent) {
        if (!providerName?.textContent && !serviceContact?.textContent)
            return { providerNames: [], providerValues: [] };

        const serviceProvider = wfsResponse.querySelector('ServiceProvider');
        const serviceProviderLength = serviceProvider?.children.length;

        if (serviceProvider && serviceProvider.children) {
            Array.from(serviceProvider.children).forEach((item, index) => {
                if (
                    serviceProviderLength &&
                    item &&
                    item.textContent &&
                    item.textContent !== '' &&
                    index !== serviceProviderLength - 1
                ) {
                    providerNames.push(item.tagName.replace('ows:', ''));
                    providerValues.push(item.textContent);
                }
            });

            const serviceContact = wfsResponse.querySelector('ServiceContact');
            if (serviceContact && serviceContact.children) {
                Array.from(serviceContact?.children).forEach(servContItem => {
                    if (
                        servContItem &&
                        servContItem.textContent &&
                        servContItem.textContent !== '' &&
                        !servContItem.children.length
                    ) {
                        providerNames.push(
                            servContItem.tagName.replace('ows:', '')
                        );
                        providerValues.push(servContItem.textContent);
                    }
                    if (servContItem.children.length) {
                        const phone = wfsResponse.querySelector('Phone');
                        if (phone) {
                            Array.from(phone?.children).forEach(phoneItem => {
                                if (
                                    phoneItem &&
                                    phoneItem.textContent &&
                                    phoneItem.textContent !== ''
                                ) {
                                    providerNames.push(
                                        phoneItem.tagName.replace('ows:', '')
                                    );
                                    providerValues.push(
                                        phoneItem.textContent.trim()
                                    );
                                }
                            });
                        }
                        const address = wfsResponse.querySelector('Address');
                        if (address) {
                            Array.from(address.children).forEach(address => {
                                if (
                                    address &&
                                    address.textContent &&
                                    address.textContent !== ''
                                ) {
                                    providerNames.push(
                                        address.tagName.replace('ows:', '')
                                    );
                                    providerValues.push(
                                        address.textContent.trim()
                                    );
                                }
                            });
                        }
                    }
                });
            }
        }
    }
    return {
        providerNames,
        providerValues
    };
};

const etxractOperations = (wfsResponse: XMLDocument): IOperations => {
    const operationsMetadata = wfsResponse.querySelectorAll('Operation');
    const operations: IOperations = {};

    if (operationsMetadata) {
        Array.from(operationsMetadata).forEach(operation => {
            const operationMethod = operation.getAttribute('name');
            if (
                operation &&
                operationMethod &&
                operation.children[0].children[0].children[0]
            ) {
                const attributeChildren =
                    operation.children[0].children[0].children.length;
                const attributeNodeName =
                    operation.children[0].children[0].children[0].nodeName;

                switch (attributeChildren) {
                    // both request methods are not supported
                    case 0:
                        operations[operationMethod] = {
                            get: '✘',
                            post: '✘'
                        };
                        break;
                    // only one request method is supported
                    case 1:
                        if (attributeNodeName.indexOf('Get') > -1) {
                            operations[operationMethod] = {
                                get: '✓',
                                post: '✘'
                            };
                        } else if (attributeNodeName.indexOf('Post') > -1) {
                            operations[operationMethod] = {
                                get: '✘',
                                post: '✓'
                            };
                        }
                        break;
                    // both request methods are supported
                    case 2:
                        operations[operationMethod] = {
                            get: '✓',
                            post: '✓'
                        };
                        break;
                }
            }
        });
    }
    return operations;
};

export {
    parseXML,
    extractTypenames,
    extractTitle,
    extractAbstract,
    extractAcceptVersions,
    extractProvider,
    etxractOperations
};
