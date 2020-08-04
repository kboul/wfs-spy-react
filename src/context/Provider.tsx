import React, { useReducer, FC } from 'react';
import Context from '.';
import { IProvider } from './models';
import initialState from './initialState';
import reducer from './reducer';

const Provider: FC<IProvider> = ({ children }: IProvider) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
