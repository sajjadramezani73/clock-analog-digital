import React from 'react'
import Clock from '../clock/clock'
import Date from '../date/date'
import './clockBox.css'

const ClockBox = () => {

    return (
        <div className="clockBox">
            <div className="title">ساعت و تاریخ</div>
            <div className="main">
                <div className="div-clock">
                    <Clock />
                </div>
                <div className="div-date">
                    <Date />
                </div>
            </div>
        </div>
    )
}

export default ClockBox
