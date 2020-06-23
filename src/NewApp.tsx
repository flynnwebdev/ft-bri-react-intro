import React from "react"
import Comment from "./Comment"

export default (): JSX.Element => {
    return (
        <div className="comments">
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}
