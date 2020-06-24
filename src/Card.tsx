import React from 'react'

const styles: React.CSSProperties = {
    backgroundColor: "gray",
    border: "4px solid red"
}

interface CardProps {
    heading?: string
    children?: JSX.Element
}

export default (props: CardProps): JSX.Element => {
    return (
        <div style={styles}>
            <h2>{props.heading}</h2>
            {props.children}
        </div>
    )
}
