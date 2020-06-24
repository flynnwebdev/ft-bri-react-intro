import React from 'react'

type CommentProps = {
    author?: string
    avatar: string
    date: string
    text: string
}

function isDirtyWords(input: string): boolean {
    return /banana/.test(input)
}

export default ({ avatar, author="Anonymous", date, text }: CommentProps): JSX.Element => {
    return !isDirtyWords(text) ? (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">{author}</a>
                <p className="date">{date}</p>
                <p className="text">{text}</p>
            </div>
        </div>
    ) : (
        <div>Banned Comment!</div>
    )
}
