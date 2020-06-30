import React, { FC, useContext } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import Context from '../../context';
import { IContext } from '../../context/models';
import { changeWfsRequest } from '../../context/actions';
import TableButtons from '../TableButtons';
import { formWfsRequest } from './utils';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';

const WFSRequest: FC = () => {
    const { state, dispatch }: IContext = useContext(Context);

    const onClick = () =>
        dispatch(changeWfsRequest({ wfsRequest: formWfsRequest(state) }));

    return (
        <FormGroup className="text-center" row>
            <Col md={{ size: 10, offset: 1 }}>
                <Label for="wfsRequest" className={sharedStyles.labelFont}>
                    {consts.formWfsRequest}
                </Label>
                <Input
                    type="textarea"
                    rows="10"
                    className={sharedStyles.textarea}
                    disabled
                    value={state.wfsRequest}
                />
                <TableButtons label={consts.request} onClick={onClick} />
            </Col>
        </FormGroup>
    );
};

export default WFSRequest;
