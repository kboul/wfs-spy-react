import React, { useContext, FC } from 'react';
import { Context } from '../context';
import { ITitle } from './models';
import consts from './constants';

const Title: FC<ITitle> = ({ title }) => {
    const { state } = useContext(Context);

    return (
        <>
            {state.getCapResponse && !title ? (
                <b>{consts.noTitle}</b>
            ) : title ? (
                <b>{title}</b>
            ) : null}
        </>
    );
};

export default Title;
