import React from 'react';
import _ from 'underscore';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    var sum = data.reduce((a, b) => a + b, 0);
    return Math.round(sum/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
                <div>{average(props.data)} {props.units}</div>
            </Sparklines>
        </div>
    );
}