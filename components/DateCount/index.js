import React from 'react'
import Timer from './TimeCountDown'

export default function Index() {
    const date = new Date();
    return (
        <>
        <h1>Sample One (Fixed Date)</h1>
            <Timer endDateTime="2023-11-27 00:00:00" />

            {/* /For after 2 days of current Date */}
            <h1>Sample Two (Add one day with current date)</h1>
            <Timer endDateTime={date.setDate(date.getDate() + 1)} />
            
        </>
    )
}
