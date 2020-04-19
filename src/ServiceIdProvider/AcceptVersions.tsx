import React, { FC, useContext } from 'react';
import { Context } from '../context';
import { IAcceptVersions } from './models';
import consts from './constants';

const AcceptVersions: FC<IAcceptVersions> = ({ versions }) => {
    const { state } = useContext(Context);
    return (
        <>
            {versions.length ? (
                versions.map((version: string, versionIndex: number) => (
                    <span key={versionIndex}>
                        {versionIndex === 0 && consts.acceptVersionsStr}
                        <b>
                            {version}
                            {versionIndex !== versions.length - 1 ? ', ' : ''}
                        </b>
                        {versionIndex === versions.length - 1 && '.'}
                    </span>
                ))
            ) : state.getCapResponse && !versions.length ? (
                <b>sth</b>
            ) : null}
        </>
    );
};

export default AcceptVersions;
