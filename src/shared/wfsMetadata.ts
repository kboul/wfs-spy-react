import { IOperations, IProvider, IFuncs } from './models';

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

const extractKeywords = (wfsResponse: XMLDocument) => {
    const keywordsTag = wfsResponse.querySelector('Keywords');
    const keywords: string[] = [];

    if (keywordsTag?.children) {
        Array.from(keywordsTag.children).forEach(keyword => {
            if (keyword && keyword.textContent) {
                keywords.push(keyword.textContent);
            }
        });
    }

    return keywords;
};

const extractAcceptVersions = (wfsResponse: XMLDocument): string[] => {
    const acceptVersionTag = wfsResponse.querySelector(
        '[name="AcceptVersions"]'
    );
    const acceptVersions: string[] = [];

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

const extractFilterCap = (
    wfsResponse: XMLDocument,
    operator: string
): string[] => {
    const operand = wfsResponse.querySelectorAll(operator);
    const operands: string[] = [];
    if (operand && operand.length) {
        operand.forEach(operandItem => {
            const operItemAttr = operandItem.attributes;
            if (operItemAttr && operItemAttr[0] && operItemAttr[0].nodeValue) {
                operands.push(operItemAttr[0].nodeValue);
            }
        });
    }

    return operands;
};

const extractFunctions = (wfsResponse: XMLDocument): IFuncs[] => {
    const functionTag = wfsResponse.querySelectorAll('Function');
    let functions: IFuncs[] = [];

    if (functionTag) {
        Array.from(functionTag).forEach(funItem => {
            if (
                funItem &&
                funItem.attributes[0] &&
                funItem.attributes[0].textContent
            ) {
                const funItem1stChild = funItem.children[0];
                const funItem2ndChild = funItem.children[1];
                if (funItem1stChild && funItem1stChild.textContent) {
                    functions.push({
                        name: funItem.attributes[0].textContent,
                        returns: funItem1stChild.textContent
                    });
                }
                if (funItem2ndChild && funItem2ndChild.children) {
                    const argsAndTypes: string[] = [];
                    Array.from(funItem2ndChild.children).forEach(
                        (args, argsIndex) => {
                            const argsAttr = args.attributes[0];
                            if (argsAttr && argsAttr.textContent) {
                                argsAndTypes.push(
                                    `${argsAttr.textContent} (${args.children[0].textContent})`
                                );
                                if (
                                    argsIndex ===
                                    funItem2ndChild.children.length - 1
                                ) {
                                    functions = [...functions];
                                    functions[
                                        functions.length - 1
                                    ].argsAndTypes = argsAndTypes;
                                }
                            }
                        }
                    );
                }
            }
        });
    }

    return functions;
};

export {
    parseXML,
    extractTypenames,
    extractTitle,
    extractAbstract,
    extractKeywords,
    extractAcceptVersions,
    extractProvider,
    etxractOperations,
    extractFilterCap,
    extractFunctions
};
