import React from 'react'
import faker from 'faker'

export default (): JSX.Element => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">Mary Smith</a>
                <p className="date">11/12 6:00pm</p>
                <p className="text">I think you are really cool!</p>
            </div>
        </div>
    )
}
