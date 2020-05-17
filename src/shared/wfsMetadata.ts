import {
    IOperations,
    IProvider,
    IFuncs,
    IServiceId,
    IFeatureTypes,
    IAttrNamesTypes
} from './models';
import { tags } from './constants';

const replaceOws = (expression: string): string => {
    if (!expression) return '';
    return expression.replace('ows:', '');
};

const parseXML = (response: string): XMLDocument => {
    const parser = new DOMParser();

    if (!response) return parser.parseFromString('', 'text/xml');
    return parser.parseFromString(response, 'text/xml');
};

const extractTypenames = (data: string): string[] => {
    if (!data) return [];

    const typenamesTags = parseXML(data).querySelectorAll(tags.featureTypeName);
    const typenames: string[] = ['---'];

    if (typenamesTags) {
        typenamesTags.forEach(tag => {
            if (tag && tag.textContent) typenames.push(tag.textContent);
        });
    }

    return typenames;
};

const extractTitle = (getCapResp: XMLDocument): string => {
    if (!getCapResp) return '';

    const titleTag = getCapResp.querySelector(tags.title);
    let title: string = '';
    if (titleTag && titleTag?.textContent) title = titleTag.textContent;

    const titleTags = getCapResp.querySelectorAll(tags.title);
    if (titleTags) {
        Array.from(titleTags).forEach(titleItem => {
            if (titleItem && titleItem.textContent)
                return (title = titleItem.textContent);
        });
    }

    return title;
};

const extractAbstract = (getCapResp: XMLDocument): string => {
    if (!getCapResp) return '';

    const abstractTag = getCapResp.querySelector(tags.abstract);
    let abstract: string | null = '';
    if (abstractTag && abstractTag.textContent)
        abstract = abstractTag.textContent;

    const abstractTags = getCapResp.querySelectorAll(tags.abstract);
    if (abstractTags) {
        Array.from(abstractTags).forEach(abstractItem => {
            if (abstractItem && abstractItem.textContent)
                return (abstract = abstractItem.textContent);
        });
    }

    return abstract;
};

const extractKeywords = (getCapResp: XMLDocument): string[] => {
    if (!getCapResp) return [];

    const keywordsTag = getCapResp.querySelector(tags.keywords);
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

const extractServiceId = (getCapResp: XMLDocument): IServiceId => {
    if (!getCapResp) return {};

    const title = extractTitle(getCapResp);
    const abstract = extractAbstract(getCapResp);
    const keywords = extractKeywords(getCapResp);

    const serviceTypeTag = getCapResp.querySelector(tags.serviceType);
    const serviceTypeVersionTag = getCapResp.querySelector(
        tags.serviceTypeVersion
    );
    const feesTag = getCapResp.querySelector(tags.fees);
    const accessConstraintsTag = getCapResp.querySelector(
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

const extractAcceptVersions = (getCapResp: XMLDocument): string[] => {
    if (!getCapResp) return [];

    const acceptVersionsTag = getCapResp.querySelector(tags.acceptVersions);
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

const extractProvider = (getCapResp: XMLDocument): IProvider => {
    const providerNameTag = getCapResp.querySelector(tags.providerName);
    const serviceContactTag = getCapResp.querySelector(tags.serviceContact);
    const providerNames: string[] = [];
    const providerValues: string[] = [];

    if (providerNameTag?.textContent && serviceContactTag?.textContent) {
        if (!providerNameTag?.textContent && !serviceContactTag?.textContent)
            return { providerNames: [], providerValues: [] };

        const serviceProviderTag = getCapResp.querySelector(
            tags.serviceProvider
        );
        if (serviceProviderTag && serviceProviderTag.children) {
            Array.from(serviceProviderTag.children).forEach(servProvItem => {
                const providerSite = servProvItem.getAttribute(tags.xLinkHRef);
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

            const serviceContactTag = getCapResp.querySelector(
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
                                            tags.xLinkHRef
                                        );
                                        if (servContItem1stChildItem) {
                                            if (
                                                servContItem1stChildItem.textContent &&
                                                !servContItem1stChildItem
                                                    .children.length
                                            ) {
                                                providerNames.push(
                                                    replaceOws(
                                                        servContItem1stChildItem.tagName
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
                                                    replaceOws(
                                                        servContItem1stChildItem.tagName
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
                                                                replaceOws(
                                                                    servContItem2ndChildItem.tagName
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

const etxractOperations = (getCapResp: XMLDocument): IOperations => {
    if (!getCapResp) return {};

    const operationTags = getCapResp.querySelectorAll(tags.operation);
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

const extractFeatureTypes = (getCapResp: XMLDocument): IFeatureTypes => {
    const featureTypes = {
        names: [],
        titles: [],
        abstracts: [],
        defaultCRS: [],
        lowerCorner: [],
        upperCorner: []
    };

    if (!getCapResp) return featureTypes;

    const featureTypeTags = getCapResp.querySelectorAll(tags.featureType);

    const feature = (tagName: string, arrayToStore: string[]) => {
        const tag = getCapResp.querySelectorAll(tagName);
        tag.forEach((tagItem, index) => {
            if (tagItem && tagItem.textContent) {
                if ([tags.title, tags.abstract].includes(tagName)) {
                    if (index > 0) arrayToStore.push(tagItem.textContent);
                } else arrayToStore.push(tagItem.textContent);
            }
        });
    };

    if (featureTypeTags && featureTypeTags.length) {
        feature(tags.featureTypeName, featureTypes.names);
        feature(tags.abstract, featureTypes.abstracts);
        feature(tags.title, featureTypes.titles);
        feature(tags.defaultCRS, featureTypes.defaultCRS);
        feature(tags.lowerCorner, featureTypes.lowerCorner);
        feature(tags.upperCorner, featureTypes.upperCorner);
    }

    return featureTypes;
};

const extractFilterCap = (
    getCapResp: XMLDocument,
    operator: string
): string[] => {
    if (!getCapResp) return [];

    const operatorTags = getCapResp.querySelectorAll(operator);
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

const extractFunctions = (getCapResp: XMLDocument): IFuncs[] => {
    if (!getCapResp) return [];

    const functionTags = getCapResp.querySelectorAll(tags.function);
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

const extractAttrNamesTypes = (
    descFeatTypeResp: XMLDocument
): IAttrNamesTypes => {
    const valueReferences: IAttrNamesTypes = {
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
};

export {
    parseXML,
    extractTypenames,
    extractServiceId,
    extractAcceptVersions,
    extractProvider,
    etxractOperations,
    extractFeatureTypes,
    extractFilterCap,
    extractFunctions,
    extractAttrNamesTypes
};
