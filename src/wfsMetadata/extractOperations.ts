import { Operations } from './models';
import tags from '../config/tags';

export default function etxractOperations(getCapResp: XMLDocument): Operations {
    if (!getCapResp) return {};

    const operationTags = getCapResp.querySelectorAll(tags.operation);
    const operations: Operations = {};
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
                    default:
                }
            }
        });
    }

    return operations;
}
