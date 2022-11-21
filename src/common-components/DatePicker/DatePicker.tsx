import React from 'react'
import * as Styled from './DatePickerStyles'
import {DatePickerProps} from '../types'

const DatePicker: React.FC<DatePickerProps> = ({onChange, incomeValue, funcIsDataChanged}) => {

    const formattedIncomeValue = incomeValue && incomeValue.split('-').reverse().join('/')
    const startDay = formattedIncomeValue ? new Date(formattedIncomeValue) : new Date()

    const handleTakeDate = (date: Date | null) => {
        if (date !== null) {
            const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
            const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
            const year = date.getFullYear()

            onChange(`${day}-${month}-${year}`)
            
            if (funcIsDataChanged) {
                funcIsDataChanged()
            }
        }
    }

    return (
        <Styled.DatePickerElement 
            dateFormat="dd-MM-yyyy"
            selected={startDay}
            onChange={(date) => handleTakeDate(date)}
            customInput={<Styled.DateInput />}
            
        />
    )
}

export default DatePicker
