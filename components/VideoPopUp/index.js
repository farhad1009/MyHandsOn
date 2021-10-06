import React from 'react'
import { useState } from 'react'
import VideoPopUp from './VideoPopUp'

export default function Index() {
    const [isPopUp, setPopUp] = useState(false)
    return (
        <>


            <button onClick={setPopUp} >VideoPlay</button>


            {isPopUp && <VideoPopUp setShow={() => setPopUp(false)} src={"https://www.youtube.com/embed/B4GwnBrp41s"} />}

        </>
    )
}
