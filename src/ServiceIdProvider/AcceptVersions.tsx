import React, { FC, useContext } from 'react';
import { Context } from '../context';
import { IAcceptVersions } from './models';
import consts from './constants';

const AcceptVersions: FC<IAcceptVersions> = ({ versions }) => {
    const { state } = useContext(Context);
    const lastVersion = versions.length - 1;
    return (
        <>
            {versions.length ? (
                versions.map((version: string, versionIndex: number) => (
                    <span key={versionIndex}>
                        {versionIndex === 0 && consts.acceptVersionsStr}
                        <b>
                            {version}
                            {versionIndex !== lastVersion ? ', ' : ''}
                        </b>
                        {versionIndex === lastVersion && '.'}
                    </span>
                ))
            ) : state.getCapResponse && !versions.length ? (
                <b>{consts.noAcceptVersions}</b>
            ) : null}
        </>
    );
};

export default AcceptVersions;
