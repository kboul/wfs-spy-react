import consts from './constants';

const formalProviderName = (wordWithCaps: string): string => {
    const splitWord = wordWithCaps.split(/(?=[A-Z])/).join(' ');
    switch (splitWord) {
        case consts.voice:
            return consts.telephone;
        case consts.facsimile:
            return consts.fax;
        case consts.electrMailAddress:
            return consts.email;
        default:
            return splitWord;
    }
};

export { formalProviderName };
