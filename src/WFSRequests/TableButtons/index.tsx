import React, { FC } from 'react';
import { Table, Button } from 'reactstrap';
import ITableButtons from './ITableButtons';
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
                            GET {label}
                        </Button>
                    </th>
                    <th>
                        <Button
                            color="primary"
                            size="sm"
                            className="float-left"
                            disabled={initialState || isGetRequest}
                            onClick={onClick}>
                            POST {label}
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
                                Open in a new window
                            </Button>
                        </td>
                        <td>
                            <Button
                                color="primary"
                                size="sm"
                                className="float-left"
                                disabled={initialState || isGetRequest}>
                                Open in a new window
                            </Button>
                        </td>
                    </tr>
                </tbody>
            )}
        </Table>
    );
};

export default TableButtons;
