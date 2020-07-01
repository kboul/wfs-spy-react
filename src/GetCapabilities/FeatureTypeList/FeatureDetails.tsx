import React, { FC, useContext, useState } from 'react';
import { Table, UncontrolledTooltip } from 'reactstrap';
import Context from '../../context';
import { IContext } from '../../context/models';
import TotalItems from '../../shared/TotalItems';
import TablePagination from '../../shared/TablePagination';
import { extractFeatureTypes, parseXML } from '../../shared/wfsMetadata';
import { checkAbstractLength } from './utils';
import consts from './constants';

const FeatureDetails: FC = () => {
    const { state }: IContext = useContext(Context);
    const getCapResp = parseXML(state.getCapResp);
    const features = extractFeatureTypes(getCapResp);
    const featuresLength = features.length;

    const pageSize = 10;
    const pagesCount = Math.ceil(featuresLength / pageSize);
    const [currentPage, setCurrentPage] = useState(0);

    const onClick = (e: React.MouseEvent<HTMLElement>, index: number) => {
        e.preventDefault();
        setCurrentPage(index);
    };

    return featuresLength ? (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <thead>
                    <tr>
                        {consts.tableHeaders.map(({ id, key, value }) => (
                            <th key={id}>{key in features[0] ? value : ''}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {features
                        .slice(
                            currentPage * pageSize,
                            (currentPage + 1) * pageSize
                        )
                        .map(
                            (
                                {
                                    name,
                                    title,
                                    abstract,
                                    defaultCRS,
                                    lowerCorner,
                                    upperCorner
                                },
                                index
                            ) => {
                                return (
                                    <tr key={`feature-details-${index}`}>
                                        <td>{title}</td>
                                        <td>{name}</td>
                                        <td>
                                            <span id={`tooltip-${index + 1}`}>
                                                {abstract &&
                                                    checkAbstractLength(
                                                        abstract
                                                    )}
                                            </span>
                                        </td>
                                        {abstract && (
                                            <UncontrolledTooltip
                                                placement="right"
                                                target={`tooltip-${index + 1}`}>
                                                {abstract}
                                            </UncontrolledTooltip>
                                        )}
                                        <td>{defaultCRS}</td>
                                        <td>{lowerCorner}</td>
                                        <td>{upperCorner}</td>
                                    </tr>
                                );
                            }
                        )}
                </tbody>
            </Table>
            {featuresLength > 10 && (
                <TablePagination
                    currentPage={currentPage}
                    pagesCount={pagesCount}
                    onClick={onClick}
                />
            )}
            <TotalItems numberOfItems={featuresLength} />
        </>
    ) : state.getCapResp && !featuresLength ? (
        <b>{consts.noFeatures}</b>
    ) : null;
};

export default FeatureDetails;
