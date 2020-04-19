import consts from './constants';

const formalProviderName = (wordWithCaps: string): string => {
    const splitWord = wordWithCaps.split(/(?=[A-Z])/).join(' ');
    if (splitWord === consts.electrMailAddress) return consts.email;
    return splitWord;
};

export { formalProviderName };
