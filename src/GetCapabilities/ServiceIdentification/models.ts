interface IServiceIdentification {}

interface ITitle {
    title: string | null | undefined;
}

interface IAbstract {
    abstract: string | null | undefined;
}

interface IKeywords {
    keywords: string[];
}

export type { IServiceIdentification, ITitle, IAbstract, IKeywords };
