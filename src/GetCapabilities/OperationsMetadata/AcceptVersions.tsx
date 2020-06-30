import React, { FC, useContext } from 'react';
import Context from '../../context';
import { IContext } from '../../context/models';
import { extractAcceptVersions, parseXML } from '../../shared/wfsMetadata';
import consts from './constants';

const AcceptVersions: FC = () => {
    const { state }: IContext = useContext(Context);
    const getCapResp = parseXML(state.getCapResp);
    const acceptVersions = extractAcceptVersions(getCapResp);
    const versionsLength = acceptVersions.length;
    const lastVersion = versionsLength - 1;

    return (
        <>
            {versionsLength ? (
                acceptVersions.map((version, index) => (
                    <span key={`accept-versions-${index}`}>
                        {index === 0 && consts.acceptVersionsStr}
                        <b>
                            {version}
                            {index !== lastVersion ? ', ' : ''}
                        </b>
                        {index === lastVersion && '.'}
                    </span>
                ))
            ) : state.getCapResp && !versionsLength ? (
                <b>{consts.noAcceptVersions}</b>
            ) : null}
        </>
    );
};

export default AcceptVersions;
