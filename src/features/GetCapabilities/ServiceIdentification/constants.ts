import globalConsts from '../../../constants';

const header = 'Service Identification';

export default {
    header,
    descr:
        'Contains basic header information for the request such as the Title and ServiceType. The ServiceType indicates which version(s) of WFS are supported.',
    cardHeader: header,
    cardTitle:
        'Lists information regarding Title, Abstract, Keywords, ServiceType, ServiceTypeVersion, Fees & AccessConstraints',
    noServiceId: `${globalConsts.noOperation} ${header} information.`
};
