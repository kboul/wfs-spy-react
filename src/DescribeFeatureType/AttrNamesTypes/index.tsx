import React, { FC, useContext } from 'react';
import { Col } from 'reactstrap';
import Context from '../../context';
import Panel from '../../shared/Panel';
import { parseXML, extractAttrNamesTypes } from '../../shared/wfsMetadata';
import IAttrNamesTypes from './model';
import consts from './constants';

const AttrNamesTypes: FC<IAttrNamesTypes> = () => {
    const { state } = useContext(Context);
    const descFeatTypeResp = parseXML(state.descFeatTypeResp);
    const attrNamesTypes = extractAttrNamesTypes(descFeatTypeResp);
    console.log(attrNamesTypes);

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.attrNamesTypesHeader}
                title={consts.attrNamesTypesDescr}
                content=""
            />
        </Col>
    );
};

export default AttrNamesTypes;
