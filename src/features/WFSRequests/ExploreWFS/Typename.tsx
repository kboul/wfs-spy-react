import React, { useEffect, useRef } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeState, types } from '../../../context';
import { ChangeEvent } from '../../../models/events';
import { getFullTypename } from '../../../utils';
import sharedStyles from '../shared.module.sass';
import { hasGeometry } from './ValueReference/utils';

const consts = { typename: 'typeName' };

export default function Typename() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) => {
        const typename = e.target.value;
        dispatch(changeState(types.typenameChanged, { typename }));
    };

    const { typename, valueReferences } = state;

    const fullTypename = getFullTypename(typename);
    const attrNamesList = valueReferences?.names[fullTypename];
    const attrTypesList = valueReferences?.types[fullTypename];

    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            if (!typename || !Object.keys(valueReferences.names).length) return;
            if (attrNamesList) {
                const valueReference = hasGeometry(attrTypesList[0])
                    ? attrNamesList[1]
                    : attrNamesList[0];
                const payload = { valueReference };
                dispatch(changeState(types.valueReferenceChanged, payload));
            }
        } else didMountRef.current = true;
        // eslint-disable-next-line
    }, [typename]);

    return (
        <FormGroup row>
            <Label className={sharedStyles.labelFont} for="typeName" md={2}>
                {consts.typename}
            </Label>
            <Col md={9}>
                <Input
                    disabled={!state.typenames.length}
                    onChange={handleChange}
                    type="select"
                    value={state.typename}>
                    {state.typenames.map(typeName => (
                        <option key={typeName}>{typeName}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
}
