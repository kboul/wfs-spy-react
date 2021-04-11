import { useEffect, useRef } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeState, types } from '../../../context';
import { ChangeEvent } from '../../../models/events';
import { firstValueReference } from '../../../utils';
import sharedStyles from '../shared.module.sass';

const consts = { typename: 'typeName' };

export default function Typename() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) => {
        const typename = e.target.value;
        dispatch(changeState(types.typenameChanged, { typename }));
    };

    const { typename, valueReferences } = state;

    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            if (!typename || !Object.keys(valueReferences.names).length) return;

            const valueReference = firstValueReference(
                typename,
                valueReferences
            );
            const payload = { valueReference: valueReference || '' };
            dispatch(changeState(types.valueReferenceChanged, payload));
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
