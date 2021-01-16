import { XmlNamespaces } from '../../../wfsMetadata/models';

export default function concatPrefixesAndUris(
    xmlNamespaces: XmlNamespaces
): string[] {
    // concatenate PREFIX with URI to a unique Array to form XML Namespaces
    const { prefixes, uris } = xmlNamespaces;
    const prefixAndUriArray: string[] = [];
    for (let i = 0; i < prefixes.length; i++) {
        // avoid attributes[0] which is the version so start from 1
        if (prefixes[i] && uris[i])
            prefixAndUriArray[i] = `${prefixes[i]}="${uris[i]}"`;
    }
    return prefixAndUriArray;
}
