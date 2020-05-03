import React, { FC, useContext } from 'react';
import Context from '../../context';
import { Col } from 'reactstrap';
import Panel from '../../shared/Panel';
import ProviderDetails from './ProviderDetails';
import { parseXML, extractProvider } from '../../shared/wfsMetadata';
import { IServiceProvider } from './models';
import consts from './constants';

const ServiceProvider: FC<IServiceProvider> = () => {
    const { state } = useContext(Context);
    const wfsResponse = parseXML(state.getCapResponse);
    const provider = extractProvider(wfsResponse);

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.providerHeader}
                title={consts.providerTitle}
                content={<ProviderDetails provider={provider} />}
            />
        </Col>
    );
};

export default ServiceProvider;
