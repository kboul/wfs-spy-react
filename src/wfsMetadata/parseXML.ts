export default function parseXML(response: string): XMLDocument {
    const parser = new DOMParser();

    if (!response) return parser.parseFromString('', 'text/xml');
    return parser.parseFromString(response, 'text/xml');
}
