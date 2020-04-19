const title = 'Title';
const abstract = 'Abstract';
const acceptVersions = 'Accept Versions';
const serviceProvider = 'Service Provider';
const no = 'This WFS service does not provide ';

export default {
    header: 'Service Id & Provider',
    descr: `This section provides information for the service identification & provider.`,
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
    noTitle: `${no} ${title}`,
    noAbstract: `${no} ${abstract}.`,
    noAcceptVersions: `${no} ${acceptVersions}.`,
    noProvider: `${no} ${serviceProvider} information.`
};
