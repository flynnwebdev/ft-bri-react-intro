import React from 'react'
import faker from 'faker'
import Comment from "./Comment"
import Card from "./Card"

interface Comment {
    author: string
    date: string
    text: string
    avatar?: string
}

export default (props: { comments: Comment[] }): JSX.Element => {
    return (
        <div className="comments">
            {props.comments.map(comment =>
                <Card>
                    <Comment
                        {...comment}
                        avatar={comment.avatar || faker.image.avatar()}
                    />
                </Card>
            )}
        </div>
    )
}