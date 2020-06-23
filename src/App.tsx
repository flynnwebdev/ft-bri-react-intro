import React from "react"
import Greeting from "./Greeting"

export default (): JSX.Element => {
    const styles: React.CSSProperties = {
        color: "red"
    }
    return (
        <>
            <h1 style={styles}>Hello!</h1>
            <Greeting />
            <Greeting />
        </>
    )
}
