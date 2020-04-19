import React, { useContext, FC } from 'react';
import { Context } from '../context';
import { IAbstract } from './models';
import consts from './constants';

const Abstract: FC<IAbstract> = ({ abstract }) => {
    const { state } = useContext(Context);
    return (
        <>
            {state.getCapResponse && !abstract ? (
                <b>{consts.noAbstract}</b>
            ) : (
                abstract
            )}
        </>
    );
};

export default Abstract;
