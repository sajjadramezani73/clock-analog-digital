import React from 'react'
import { useConvertDigitToFa } from '../../hooks/useConvertDigitToFa'
import './digitalClock.css'

const DigitalClock = ({ time }) => {
    return (
        <div className="digital">
            <p>{useConvertDigitToFa(time.hour)} : {useConvertDigitToFa(time.minute)} : {useConvertDigitToFa(time.second)}</p>
        </div>
    )
}

export default DigitalClock
