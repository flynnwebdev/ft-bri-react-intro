import React from "react"

export default (): JSX.Element => {
    let name: string = "Matt"
    return <p>Bonjour, {name.toUpperCase()}!</p>
}
