import { noOperation } from '../../../shared/constants';

const serviceId = 'Service Identification';

export default {
    header: serviceId,
    descr: `
        Contains basic header information for the request such as the Title and ServiceType. 
        The ServiceType indicates which version(s) of WFS are supported. 
    `,
    serviceIdHeader: serviceId,
    serviceIdTitle:
        'Lists information regarding Title, Abstract, Keywords, ServiceType, ServiceTypeVersion, Fees & AccessConstraints',
    noServiceId: `${noOperation} ${serviceId} information.`
};
