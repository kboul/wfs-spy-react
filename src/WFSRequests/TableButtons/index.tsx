import React, { FC } from 'react';
import { Table, Button } from 'reactstrap';
import ITableButtons from './ITableButtons';
import consts from './constants';
import styles from './index.module.sass';

const TableButtons: FC<ITableButtons> = ({
    label,
    hasModal,
    onClick,
    initialState,
    isGetRequest
}) => {
    return (
        <Table borderless className={styles.table}>
            <thead>
                <tr>
                    <th>
                        <Button
                            color="primary"
                            size="sm"
                            className="float-right"
                            disabled={initialState}
                            onClick={onClick}>
                            {consts.get} {label}
                        </Button>
                    </th>
                    <th>
                        <Button
                            color="primary"
                            size="sm"
                            className="float-left"
                            disabled={initialState || isGetRequest}
                            onClick={onClick}>
                            {consts.post} {label}
                        </Button>
                    </th>
                </tr>
            </thead>
            {hasModal && (
                <tbody>
                    <tr>
                        <td>
                            <Button
                                color="primary"
                                size="sm"
                                className="float-right"
                                disabled={initialState}>
                                {consts.openInANewWindow}
                            </Button>
                        </td>
                        <td>
                            <Button
                                color="primary"
                                size="sm"
                                className="float-left"
                                disabled={initialState || isGetRequest}>
                                {consts.openInANewWindow}
                            </Button>
                        </td>
                    </tr>
                </tbody>
            )}
        </Table>
    );
};

export default TableButtons;
