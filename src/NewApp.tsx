import React from "react"
import commentData from "./comments.json"
import Comments from "./Comments"

export default (): JSX.Element => {
    return (
        <Comments comments={commentData} />
    )
}
