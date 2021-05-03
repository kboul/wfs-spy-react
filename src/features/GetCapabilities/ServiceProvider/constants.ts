import globalConsts from '../../../constants';

const header = 'Service Provider';

export default {
    header,
    descr:
        'Provides contact information about the company publishing the WFS service, including telephone, website, and email.',
    cardHeader: header,
    cardTitle:
        'Provides contact information about the company including telephone - website and email',
    voice: 'Voice',
    telephone: 'Telephone',
    facsimile: 'Facsimile',
    fax: 'Fax',
    electrMailAddress: 'Electronic Mail Address',
    email: 'Email',
    noProvider: `${globalConsts.noOperation} ${header} information.`
};
