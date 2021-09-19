import React, { useEffect, useState } from 'react'
import './analogClock.css'

const AnalogClock = ({ time }) => {

    const [hDeg, setHDeg] = useState();
    const [mDeg, setMDeg] = useState();
    const [sDeg, setSDeg] = useState();

    useEffect(() => {
        setHDeg(time.hour * 30 + time.minute * (360 / 720))
        setMDeg(time.minute * 6 + time.second * (360 / 3600))
        setSDeg(time.second * 6)
    }, [time.hour, time.minute, time.second])

    return (
        <div className="analog">
            <div className="dot"></div>
            <div className="hour-hand" style={{ transform: `rotate(${hDeg}deg)` }}></div>
            <div className="minute-hand" style={{ transform: `rotate(${mDeg}deg)` }}></div>
            <div className="second-hand" style={{ transform: `rotate(${sDeg}deg)` }}></div>
        </div>
    )
}

export default AnalogClock
