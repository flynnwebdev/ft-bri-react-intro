import React from "react"
import Greeting from "./Greeting"
import "./App.scss"

export default (): JSX.Element => {
    const styles: React.CSSProperties = {
        color: "blue"
    }
    return (
        <div className="container">
            <h1 style={styles}>Hello!</h1>
            <p>Testing!</p>
            <Greeting />
            <Greeting />
        </div>
    )
}
