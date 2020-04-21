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
        if (serviceProvider && serviceProvider.children) {
            Array.from(serviceProvider.children).forEach(servProvItem => {
                const providerSite = servProvItem.getAttribute('xlink:href');
                if (servProvItem) {
                    if (
                        servProvItem.textContent &&
                        servProvItem.textContent !== '' &&
                        !servProvItem.children.length
                    ) {
                        providerNames.push(
                            servProvItem.tagName.replace('ows:', '')
                        );
                        providerValues.push(servProvItem.textContent);
                    } else if (!servProvItem.children.length && providerSite) {
                        providerNames.push(
                            servProvItem.tagName.replace('ows:', '')
                        );
                        providerValues.push(providerSite);
                    }
                }
            });

            const serviceContact = wfsResponse.querySelector('ServiceContact');
            if (serviceContact && serviceContact.children) {
                Array.from(serviceContact?.children).forEach(servContItem => {
                    const servContItemChildrenLength =
                        servContItem.children.length;

                    if (servContItem) {
                        if (
                            servContItem.textContent &&
                            servContItem.textContent !== '' &&
                            !servContItemChildrenLength
                        ) {
                            providerNames.push(
                                servContItem.tagName.replace('ows:', '')
                            );
                            providerValues.push(servContItem.textContent);
                        }
                        if (servContItemChildrenLength) {
                            Array.from(servContItem.children).forEach(
                                servContItem1stChildItem => {
                                    const onlineResource = servContItem1stChildItem.getAttribute(
                                        'xlink:href'
                                    );
                                    console.log(servContItem1stChildItem);
                                    console.log(
                                        servContItem1stChildItem.children
                                    );
                                    if (servContItem1stChildItem) {
                                        if (
                                            servContItem1stChildItem.textContent &&
                                            !servContItem1stChildItem.children
                                                .length
                                        ) {
                                            providerNames.push(
                                                servContItem1stChildItem.tagName.replace(
                                                    'ows:',
                                                    ''
                                                )
                                            );
                                            providerValues.push(
                                                servContItem1stChildItem.textContent
                                            );
                                        }
                                        if (
                                            !servContItem1stChildItem.children
                                                .length &&
                                            onlineResource
                                        ) {
                                            providerNames.push(
                                                servContItem1stChildItem.tagName.replace(
                                                    'ows:',
                                                    ''
                                                )
                                            );
                                            providerValues.push(onlineResource);
                                        }
                                        if (
                                            servContItem1stChildItem.children
                                                .length
                                        ) {
                                            Array.from(
                                                servContItem1stChildItem.children
                                            ).forEach(
                                                servContItem2ndChildItem => {
                                                    if (
                                                        servContItem2ndChildItem &&
                                                        servContItem2ndChildItem.textContent
                                                    ) {
                                                        providerNames.push(
                                                            servContItem2ndChildItem.tagName.replace(
                                                                'ows:',
                                                                ''
                                                            )
                                                        );
                                                        providerValues.push(
                                                            servContItem2ndChildItem.textContent
                                                        );
                                                    }
                                                }
                                            );
                                        }
                                    }
                                }
                            );
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
    const checkMark = '✓';
    const xMark = '✘';

    if (operationsMetadata) {
        Array.from(operationsMetadata).forEach(operation => {
            const operationMethod = operation.getAttribute('name');
            if (
                operation &&
                operationMethod &&
                operation.children[0].children[0].children[0]
            ) {
                const operationChildrenLength =
                    operation.children[0].children[0].children.length;
                const operationNodeName =
                    operation.children[0].children[0].children[0].nodeName;

                switch (operationChildrenLength) {
                    // both request methods are not supported
                    case 0:
                        operations[operationMethod] = {
                            get: xMark,
                            post: xMark
                        };
                        break;
                    // only one request method is supported
                    case 1:
                        if (operationNodeName.indexOf('Get') > -1) {
                            operations[operationMethod] = {
                                get: checkMark,
                                post: xMark
                            };
                        } else if (operationNodeName.indexOf('Post') > -1) {
                            operations[operationMethod] = {
                                get: xMark,
                                post: checkMark
                            };
                        }
                        break;
                    // both request methods are supported
                    case 2:
                        operations[operationMethod] = {
                            get: checkMark,
                            post: checkMark
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
