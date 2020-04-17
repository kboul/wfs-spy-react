import { createContext } from 'react';
import { IState } from './models';
import initialState from './initialState';

export const Context = createContext<IState | any>(initialState);
