import React, { FC, useContext } from 'react';
import { Context } from '../context';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import IServiceIdProvider from './model';
import consts from './constants';

const ServiceIdProvider: FC<IServiceIdProvider> = () => {
    const { state } = useContext(Context);
    console.log(state);
    if (state.parsedGetCapResp) {
        const wfsTitle = state.parsedGetCapResp.querySelector('Title');
        console.log(wfsTitle);
    }

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.wfsTitleHeader}
                text={consts.wfsTitleHeaderText}
            />
            <Panel
                header={consts.wfsVersionsHeader}
                text={consts.wfsVersionsText}
            />
            <Panel
                header={consts.wfsAbstractHeader}
                text={consts.wfsAbstractText}
            />
            <Panel
                header={consts.wfsProviderHeader}
                text={consts.wfsProviderText}
            />
        </Col>
    );
};

export default ServiceIdProvider;
