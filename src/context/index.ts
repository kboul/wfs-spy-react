import { createContext, Dispatch } from 'react';
import { State, Action } from './models';
import initialState from './initialState';

export interface ContextProps {
    state: State;
    dispatch: Dispatch<Action>;
}

export default createContext<State | any>(initialState);
