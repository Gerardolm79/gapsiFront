import React from "react";
import '../css/Welcome.css'

const Welcome = () => {

    const [candidate, setCandidate] = React.useState('');

    React.useEffect(() => {
        getWelcomeMessage()
    }, [])

    const getWelcomeMessage = async() => {
        const data = await fetch('http://localhost:8080/welcome/Gerardo')
        const msgs = await data.json()
        //console.log(msgString)
        setCandidate(msgs)
    }

    return(
        <div className="Container-welcome">
            <p>{candidate.msg}</p>
            <p>{candidate.version}</p>
            <hr />
        </div>
    )

}

export default Welcome;