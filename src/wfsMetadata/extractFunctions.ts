import { Funcs } from './models';
import tags from '../config/tags';
import parseXML from './parseXML';

export default function extractFunctions(xmlString: string): Funcs[] {
    const getCapResp: XMLDocument = parseXML(xmlString);

    if (!getCapResp) return [];

    const functionTags = getCapResp.querySelectorAll(tags.function);
    let functions: Funcs[] = [];

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
}
