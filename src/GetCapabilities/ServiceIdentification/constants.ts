import { noOperation } from '../../shared/constants';

const title = 'Title';
const abstract = 'Abstract';
const keywords = 'Keywords';

export default {
    header: 'Service Identification',
    descr: `
        Contains basic header information for the request such as the Title and ServiceType. 
    `,
    titleHeader: title,
    titleTitle: 'Provides information for the WFS title',
    abstractHeader: abstract,
    abstractTitle: 'Provides an abstract for the selected WFS',
    keywordsHeader: keywords,
    keywordsTitle: 'Provides keywords for the selected WFS',
    keywordsStr: 'The selected WFS service has the keywords ',
    noTitle: `${noOperation} ${title}.`,
    noAbstract: `${noOperation} ${abstract}.`,
    noKeywords: `${noOperation} ${keywords}.`
};
