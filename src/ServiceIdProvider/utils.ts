const formalProviderName = (wordWithCaps: string): string => {
    const splitWord = wordWithCaps.split(/(?=[A-Z])/).join(' ');
    if (splitWord === 'Electronic Mail Address') return 'Email';
    return splitWord;
};

export { formalProviderName };
