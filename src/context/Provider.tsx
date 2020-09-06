import React, { useReducer, ReactNode } from 'react';
import Context from '.';
import initialState from './initialState';
import reducer from './reducer';

interface ProviderProps {
    children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}
