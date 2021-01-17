export default function parseXML(response: string): XMLDocument {
    const parser = new DOMParser();
    return parser.parseFromString(response || '', 'text/xml');
}
