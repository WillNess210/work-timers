import React from "react";
import { CounterTimer } from "../../logic/Timer";
import "./timer.css";

interface CounterTimerRendererProps {
    timer: CounterTimer;
}

const CounterTimerRenderer = ({
    timer
}: CounterTimerRendererProps): JSX.Element => {
    return <>Counter Timer</>;
}

export default CounterTimerRenderer;