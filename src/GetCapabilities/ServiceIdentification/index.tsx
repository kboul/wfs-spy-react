import React, { FC, useContext } from 'react';
import Context from '../../context';
import { Col } from 'reactstrap';
import Panel from '../../shared/Panel';
import Title from './Title';
import Abstract from './Abstract';
import Keywords from './Keywords';
import {
    extractTitle,
    parseXML,
    extractAbstract,
    extractKeywords
} from '../../shared/wfsMetadata';
import { IServiceIdentification } from './models';
import consts from './constants';

const ServiceIdentification: FC<IServiceIdentification> = () => {
    const { state } = useContext(Context);
    const wfsResponse = parseXML(state.getCapResponse);
    const title = extractTitle(wfsResponse);
    const abstract = extractAbstract(wfsResponse);
    const keywords = extractKeywords(wfsResponse);

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.titleHeader}
                title={consts.titleTitle}
                content={<Title title={title} />}
            />
            <Panel
                header={consts.abstractHeader}
                title={consts.abstractTitle}
                content={<Abstract abstract={abstract} />}
            />
            <Panel
                header={consts.keywordsHeader}
                title={consts.keywordsTitle}
                content={<Keywords keywords={keywords} />}
            />
        </Col>
    );
};

export default ServiceIdentification;
