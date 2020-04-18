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

const extractTitle = (wfsResponse: XMLDocument | any): string => {
    return wfsResponse.querySelector('Title')?.textContent;
};

const extractAcceptedVersions = (wfsResponse: XMLDocument | any): string[] => {
    const acceptedVersions: string[] = [];
    const acceptVersionTag = wfsResponse.querySelector(
        '[name="AcceptVersions"]'
    );
    const acceptVersionChildren: HTMLCollection =
        acceptVersionTag?.children[0]?.children;
    if (acceptVersionChildren) {
        Array.from(acceptVersionChildren).forEach((child: any) =>
            acceptedVersions.push(child.textContent)
        );
    }
    return acceptedVersions;
};

const extractAbstract = (wfsResponse: XMLDocument | any): string => {
    return wfsResponse.querySelector('Abstract')?.textContent;
};

export {
    parseXML,
    extractTypenames,
    extractTitle,
    extractAbstract,
    extractAcceptedVersions
};
