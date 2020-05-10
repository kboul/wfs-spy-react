import consts from './constants';
import { splitStrOnUpperCase } from '../../shared/utils';

const formalProviderName = (strOnUpperCase: string): string => {
    const splittedString = splitStrOnUpperCase(strOnUpperCase);
    switch (splittedString) {
        case consts.voice:
            return consts.telephone;
        case consts.facsimile:
            return consts.fax;
        case consts.electrMailAddress:
            return consts.email;
        default:
            return splittedString;
    }
};

export { formalProviderName };
