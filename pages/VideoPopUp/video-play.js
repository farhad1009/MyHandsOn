import React from 'react'
import { useState } from 'react'
import VideoPopUp from '../../components/VideoPopUp'

export default function VideoPlay() {
    const [isPopUp, setPopUp] = useState(false)
    return (
        <>

            
                <button onClick={setPopUp} >VideoPlay</button>
           

            {isPopUp && <VideoPopUp setShow={() => setPopUp(false)} src={"https://www.youtube.com/embed/B4GwnBrp41s"} />}

        </>
    )
}
