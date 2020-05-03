const checkAbstractLength = (abstract: string): string => {
    if (!abstract) return '-';
    if (abstract.length > 50) {
        return `${abstract.substr(0, 50)}...`;
    }
    return abstract;
};

export { checkAbstractLength };
