import React, { useState, useEffect } from 'react';
import StyledHeadingH6 from '../styledHeadingH6/StyledHeadingH6';
import StyledSmText from '../styledSmText/StyledSmText';

const Timer = ({
    initialTime = 120,
    onExpire,
    reset,
    className,
    timerKey
}) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        // Use a unique key for each timer to store the start time in local storage
        const startTimeKey = `${timerKey}_startTime`;
        const startTime = localStorage.getItem(startTimeKey);

        if (startTime && !reset) {
            const elapsedTime = Math.floor((Date.now() - parseInt(startTime, 10)) / 1000);
            const remainingTime = initialTime - elapsedTime;
            setTimeLeft(remainingTime > 0 ? remainingTime : 0);
        } else {
            setTimeLeft(initialTime);
            localStorage.setItem(startTimeKey, Date.now());
        }
    }, [reset, initialTime, timerKey]);

    useEffect(() => {
        if (timeLeft <= 0) {
            if (onExpire) onExpire();
            return;
        }
        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft, onExpire]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className='pt-0.5'>
        <StyledSmText className={className} text={formatTime(timeLeft)} />
        </div>
    );
};

export default Timer;
