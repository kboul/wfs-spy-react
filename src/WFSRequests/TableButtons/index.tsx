import React, { FC } from 'react';
import { Table, Button } from 'reactstrap';

interface ITableButtons {
    label: string;
}

const TableButtons: FC<ITableButtons> = ({ label }) => {
    return (
        <Table borderless>
            <thead>
                <tr>
                    <th>
                        <Button
                            color="primary"
                            size="sm"
                            className="float-right"
                            disabled>
                            GET {label} Request
                        </Button>
                    </th>
                    <th>
                        <Button
                            color="primary"
                            size="sm"
                            className="float-left"
                            disabled>
                            POST {label} Request
                        </Button>
                    </th>
                </tr>
            </thead>
        </Table>
    );
};

export default TableButtons;
