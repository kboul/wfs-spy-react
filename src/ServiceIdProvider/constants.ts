const title = 'Title';
const abstract = 'Abstract';
const acceptVersions = 'Accept Versions';
const serviceProvider = 'Service Provider';
const no = 'This WFS service does not provide ';

export default {
    header: 'Service Id & Provider',
    descr: `
        Contains basic header information for the request such as the Title and ServiceType. 
        The ServiceType indicates which version(s) of WFS are supported. Moreover it provides 
        contact information about the company publishing the WFS service, including telephone,
        website, and email.
    `,
    titleHeader: title,
    titleTitle: 'Provides information for the WFS title',
    versionsHeader: acceptVersions,
    versionsTitle: 'Provides information for the WFS accepted versions',
    abstractHeader: abstract,
    abstractTitle: 'Provides an abstract for the selected WFS',
    providerHeader: serviceProvider,
    providerTitle:
        'Provides contact information about the company including telephone - website and email',
    acceptVersionsStr: 'The selected WFS service supports versions ',
    electrMailAddress: 'Electronic Mail Address',
    email: 'Email',
    noTitle: `${no} ${title}.`,
    noAbstract: `${no} ${abstract}.`,
    noAcceptVersions: `${no} ${acceptVersions}.`,
    noProvider: `${no} ${serviceProvider} information.`
};
