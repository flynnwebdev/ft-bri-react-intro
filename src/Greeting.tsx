import React from "react"
// import { Person } from "./NewApp"
import foo from "./Greeting.module.scss"

const styles: React.CSSProperties = {
    color: "red",
    fontSize: "30px",
    backgroundColor: "black",
    border: "5px solid yellow"
}

export default (): JSX.Element => {
    let me = { name: "Matt", age: 47 }
    return <p className={foo.under} style={styles}>Bonjour, {me.name.toUpperCase()}!</p>
}
