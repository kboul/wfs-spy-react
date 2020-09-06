import { noOperation } from '../../../shared/constants';

const serviceProvider = 'Service Provider';

export default {
    header: 'Service Provider',
    descr: ` 
        Provides 
        contact information about the company publishing the WFS service, including telephone,
        website, and email.
    `,
    providerHeader: serviceProvider,
    providerTitle:
        'Provides contact information about the company including telephone - website and email',
    voice: 'Voice',
    telephone: 'Telephone',
    facsimile: 'Facsimile',
    fax: 'Fax',
    electrMailAddress: 'Electronic Mail Address',
    email: 'Email',
    noProvider: `${noOperation} ${serviceProvider} information.`
};
