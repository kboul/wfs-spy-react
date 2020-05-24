import React, { FC, useContext, useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Context from '../context';
import Panel from '../shared/Panel';
import chartOptions from './utils';
import { IChartOpts } from './models';
import consts from './constants';

const Statistics: FC = () => {
    const { state } = useContext(Context);
    const [timeOpts, setTimeOpts] = useState<IChartOpts>(chartOptions('time'));
    const [requestsOpts, setRequestsOpts] = useState<IChartOpts>(
        chartOptions('number')
    );

    useEffect(() => {
        const totalRequestNumber =
            state.getGetCapNumber + state.getDescFeatTypeNumber;
        setRequestsOpts(prevState => {
            const options = { ...prevState };
            options.yAxis.max =
                totalRequestNumber >= 10 ? totalRequestNumber + 1 : 10;
            return options;
        });
    }, [state.getGetCapNumber, state.getDescFeatTypeNumber]);

    useEffect(() => {
        if (!state.getCapResp) return;

        setTimeOpts(prevState => {
            const options = { ...prevState };
            const series = [...options.series];
            series[0].data = [state.getGetCapTime];
            return options;
        });
    }, [state.getCapResp, state.getGetCapTime]);

    useEffect(() => {
        if (!state.descFeatTypeResp) return;

        setTimeOpts(prevState => {
            const options = { ...prevState };
            const series = [...options.series];
            series[1].data = [state.getDescFeatTypeTime];
            return options;
        });
    }, [state.descFeatTypeResp, state.getDescFeatTypeTime]);

    useEffect(() => {
        if (!state.getCapResp && !state.descFeatTypeResp) return;

        setRequestsOpts(prevState => {
            const options = { ...prevState };
            const series = [...options.series];
            series[0].data = [state.getGetCapNumber];
            series[1].data = [state.getDescFeatTypeNumber];
            series[4].data = [
                state.getGetCapNumber + state.getDescFeatTypeNumber
            ];
            return options;
        });
    }, [
        state.getCapResp,
        state.descFeatTypeResp,
        state.getGetCapTime,
        state.getGetCapNumber,
        state.getDescFeatTypeNumber
    ]);

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.respTimeHeader}
                title={consts.respTimeDescr}
                content={
                    state.getCapResp && (
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={timeOpts}
                        />
                    )
                }
            />
            <Panel
                header={consts.reqTimeHeader}
                title={consts.reqTimeDescr}
                content={
                    state.getCapResp && (
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={requestsOpts}
                        />
                    )
                }
            />
        </Col>
    );
};

export default Statistics;
