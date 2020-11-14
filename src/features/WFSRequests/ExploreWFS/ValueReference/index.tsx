import React, { useEffect, useRef } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeValueReference } from '../../../../context';
import { getFullTypename } from '../../../../shared/utils';
import { hasGeometry } from './utils';
import { ChangeEvent } from '../../../../shared/models';
import sharedStyles from '../../shared.module.sass';

const consts = { valueReference: 'valueRefer.' };

export default function ValueReference() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeValueReference({ valueReference: e.target.value }));

    const { typename, valueReferences } = state;
    const fullTypename = getFullTypename(typename);
    const attrNamesList = valueReferences?.names[fullTypename];

    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            if (!typename || !Object.keys(valueReferences.names).length) return;
            const attrTypesList = valueReferences?.types[fullTypename];
            if (attrNamesList) {
                const valueReference = hasGeometry(attrTypesList[0])
                    ? attrNamesList[1]
                    : attrNamesList[0];
                dispatch(changeValueReference({ valueReference }));
            }
        } else didMountRef.current = true;
        // eslint-disable-next-line
    }, [typename, valueReferences, dispatch]);

    const disabled = (index: number) =>
        hasGeometry(valueReferences?.types[fullTypename][index]);

    return (
        <FormGroup row>
            <Label className={sharedStyles.labelFont} for="valueRefer" md={2}>
                {consts.valueReference}
            </Label>
            <Col md={9}>
                <Input
                    disabled={!state.descFeatTypeResp}
                    onChange={handleChange}
                    type="select"
                    value={state.valueReference}>
                    {attrNamesList?.map((valueRefer: string, index: number) => (
                        <option
                            key={`value-reference-${index}`}
                            disabled={disabled(index)}>
                            {valueRefer}
                        </option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
}
