import moment from 'jalali-moment';
import React, { useEffect, useState } from 'react'
import AnalogClock from '../analogClock/analogClock';
import DigitalClock from '../digitalClock/digitalClock'
import './clock.css'

const Clock = () => {

    const [checkbox, setCheckbox] = useState(false);
    const [time, setTime] = useState({
        hour: 0,
        minute: 0,
        second: 0
    });

    useEffect(() => {
        setInterval(() => {
            const dateNow = moment().locale('fa')
            setTime({ ...time, hour: dateNow.format('HH'), minute: dateNow.format('mm'), second: dateNow.format('ss') })
        }, 1000);
    })


    return (
        <div className="clock" >
            <div className="checkbox">
                <input type="checkbox" className="input" onChange={(e) => setCheckbox(e.target.checked)} />
            </div>
            <div className="div-clock">
                {checkbox ? <AnalogClock time={time} /> : <DigitalClock time={time} />}
            </div>
        </div>
    )
}

export default Clock
