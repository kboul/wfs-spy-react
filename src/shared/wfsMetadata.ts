import { IOperations, IProvider, IFuncs } from './models';
import { tags } from './constants';

const replaceOws = (expression: string) => expression.replace('ows:', '');

const parseXML = (response: string): XMLDocument => {
    const parser = new DOMParser();
    return parser.parseFromString(response, 'text/xml');
};

const extractTypenames = (data: string) => {
    const typenamesTags = parseXML(data).querySelectorAll(tags.featureTypeName);
    const typenames: string[] = ['---'];

    if (typenamesTags) {
        typenamesTags.forEach(tag => {
            if (tag && tag.textContent) typenames.push(tag.textContent);
        });
    }

    return typenames;
};

const extractTitle = (getCapResponse: XMLDocument) => {
    const titleTag = getCapResponse.querySelector(tags.title);
    let title: string = '';
    if (titleTag && titleTag?.textContent) title = titleTag.textContent;

    const titleTags = getCapResponse.querySelectorAll(tags.title);
    if (titleTags) {
        Array.from(titleTags).forEach(titleItem => {
            if (titleItem && titleItem.textContent)
                return (title = titleItem.textContent);
        });
    }

    return title;
};

const extractAbstract = (getCapResponse: XMLDocument) => {
    const abstractTag = getCapResponse.querySelector(tags.abstract);
    let abstract: string | null = '';
    if (abstractTag && abstractTag.textContent)
        abstract = abstractTag.textContent;

    const abstractTags = getCapResponse.querySelectorAll(tags.abstract);
    if (abstractTags) {
        Array.from(abstractTags).forEach(abstrItem => {
            if (abstrItem && abstrItem.textContent)
                return (abstract = abstrItem.textContent);
        });
    }

    return abstract;
};

const extractKeywords = (getCapResponse: XMLDocument) => {
    const keywordsTag = getCapResponse.querySelector(tags.keywords);
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

const extractServiceId = (getCapResponse: XMLDocument) => {
    const title = extractTitle(getCapResponse);
    const abstract = extractAbstract(getCapResponse);
    const keywords = extractKeywords(getCapResponse);

    const serviceTypeTag = getCapResponse.querySelector(tags.serviceType);
    const serviceTypeVersionTag = getCapResponse.querySelector(
        tags.serviceTypeVersion
    );
    const feesTag = getCapResponse.querySelector(tags.fees);
    const accessConstraintsTag = getCapResponse.querySelector(
        tags.accessConstraints
    );

    return {
        [tags.title]: title || '-',
        [tags.abstract]: abstract || '-',
        [tags.keywords]: keywords.join(', ') || '-',
        [tags.serviceType]: serviceTypeTag?.textContent || '-',
        [tags.serviceTypeVersion]: serviceTypeVersionTag?.textContent || '-',
        [tags.fees]: feesTag?.textContent || '-',
        [tags.accessConstraints]: accessConstraintsTag?.textContent || '-'
    };
};

const extractAcceptVersions = (getCapResponse: XMLDocument) => {
    const acceptVersionsTag = getCapResponse.querySelector(tags.acceptVersions);
    const acceptVersions: string[] = [];

    const acceptVersionChildren = acceptVersionsTag?.children[0]?.children;
    if (acceptVersionChildren) {
        Array.from(acceptVersionChildren).forEach(child => {
            if (child && child.textContent)
                acceptVersions.push(child.textContent);
        });
    } else {
        const acceptVersionOneChild = acceptVersionsTag?.children;
        if (acceptVersionOneChild) {
            Array.from(acceptVersionOneChild).forEach(child => {
                if (child && child.textContent)
                    acceptVersions.push(child.textContent);
            });
        }
    }

    return acceptVersions;
};

const extractProvider = (getCapResponse: XMLDocument): IProvider => {
    const providerNameTag = getCapResponse.querySelector(tags.providerName);
    const serviceContactTag = getCapResponse.querySelector(tags.serviceContact);
    const providerNames: string[] = [];
    const providerValues: string[] = [];

    if (providerNameTag?.textContent && serviceContactTag?.textContent) {
        if (!providerNameTag?.textContent && !serviceContactTag?.textContent)
            return { providerNames: [], providerValues: [] };

        const serviceProviderTag = getCapResponse.querySelector(
            tags.serviceProvider
        );
        if (serviceProviderTag && serviceProviderTag.children) {
            Array.from(serviceProviderTag.children).forEach(servProvItem => {
                const providerSite = servProvItem.getAttribute('xlink:href');
                if (servProvItem) {
                    if (
                        servProvItem.textContent &&
                        !servProvItem.children.length
                    ) {
                        providerNames.push(replaceOws(servProvItem.tagName));
                        providerValues.push(servProvItem.textContent);
                    } else if (!servProvItem.children.length && providerSite) {
                        providerNames.push(replaceOws(servProvItem.tagName));
                        providerValues.push(providerSite);
                    }
                }
            });

            const serviceContactTag = getCapResponse.querySelector(
                tags.serviceContact
            );
            if (serviceContactTag && serviceContactTag.children) {
                Array.from(serviceContactTag?.children).forEach(
                    servContItem => {
                        const servContItemChildrenLength =
                            servContItem.children.length;

                        if (servContItem) {
                            if (
                                servContItem.textContent &&
                                !servContItemChildrenLength
                            ) {
                                providerNames.push(
                                    replaceOws(servContItem.tagName)
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
                                                !servContItem1stChildItem
                                                    .children.length
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
                                                !servContItem1stChildItem
                                                    .children.length &&
                                                onlineResource
                                            ) {
                                                providerNames.push(
                                                    servContItem1stChildItem.tagName.replace(
                                                        'ows:',
                                                        ''
                                                    )
                                                );
                                                providerValues.push(
                                                    onlineResource
                                                );
                                            }
                                            if (
                                                servContItem1stChildItem
                                                    .children.length
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
                    }
                );
            }
        }
    }

    return {
        providerNames,
        providerValues
    };
};

const etxractOperations = (getCapResponse: XMLDocument) => {
    const operationTags = getCapResponse.querySelectorAll(tags.operation);
    const operations: IOperations = {};
    const checkMark = '✓';
    const xMark = '✘';

    if (operationTags) {
        Array.from(operationTags).forEach(operation => {
            const operationMethod = operation.getAttribute(
                tags.operationMethod
            );
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

const extractFeatureTypeList = (getCapResponse: XMLDocument) => {
    const featureTypeTags = getCapResponse.querySelectorAll(tags.featureType);
    const names: string[] = [];
    const titles: string[] = [];
    const abstracts: string[] = [];
    const defaultCRS: string[] = [];
    const lowerCorner: string[] = [];
    const upperCorner: string[] = [];

    const feature = (tagName: string, arrayToStore: string[]) => {
        const tag = getCapResponse.querySelectorAll(tagName);
        tag.forEach((tagItem, index) => {
            if (tagItem && tagItem.textContent) {
                if ([tags.title, tags.abstract].includes(tagName)) {
                    if (index > 0) arrayToStore.push(tagItem.textContent);
                } else arrayToStore.push(tagItem.textContent);
            }
        });
    };

    if (featureTypeTags && featureTypeTags.length) {
        feature(tags.featureTypeName, names);
        feature(tags.abstract, abstracts);
        feature(tags.title, titles);
        feature(tags.defaultCRS, defaultCRS);
        feature(tags.lowerCorner, lowerCorner);
        feature(tags.upperCorner, upperCorner);
    }

    return {
        names,
        titles,
        abstracts,
        defaultCRS,
        lowerCorner,
        upperCorner
    };
};

const extractFilterCap = (getCapResponse: XMLDocument, operator: string) => {
    const operatorTags = getCapResponse.querySelectorAll(operator);
    const operands: string[] = [];
    if (operatorTags && operatorTags.length) {
        operatorTags.forEach(operItem => {
            const operItemAttr = operItem.attributes;
            if (
                operItemAttr &&
                operItemAttr[0] &&
                operItemAttr[0].textContent
            ) {
                operands.push(operItemAttr[0].textContent);
            }
        });
    }

    return operands;
};

const extractFunctions = (getCapResponse: XMLDocument) => {
    const functionTags = getCapResponse.querySelectorAll(tags.function);
    let functions: IFuncs[] = [];

    if (functionTags) {
        Array.from(functionTags).forEach(funItem => {
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
    extractServiceId,
    extractAcceptVersions,
    extractProvider,
    etxractOperations,
    extractFeatureTypeList,
    extractFilterCap,
    extractFunctions
};
