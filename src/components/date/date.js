import moment from 'jalali-moment';
import React, { useEffect, useState } from 'react'
import { useConvertDigitToFa } from '../../hooks/useConvertDigitToFa';
import './date.css'

const Date = () => {

    const [day, setDay] = useState();
    const [dayWeek, setDayWeek] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();

    useEffect(() => {
        setInterval(() => {
            const dateNow = moment().locale('fa')
            setDay(dateNow.format('DD'));
            setDayWeek(dateNow.format('dddd'));
            setMonth(dateNow.format('MMM'));
            setYear(dateNow.format('YYYY'));
        }, 1000);
    })

    return (
        <div className="date">
            {dayWeek} - {useConvertDigitToFa(day)}  {month} - {useConvertDigitToFa(year)}
        </div>
    )
}

export default Date
