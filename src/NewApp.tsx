import React from "react"
import Comment from "./Comment"
import faker from 'faker'
import Card from "./Card"

export default (): JSX.Element => {
    return (
        <div className="comments">
            <Card>
                <Comment
                    author="Mary Smith"
                    avatar={faker.image.avatar()}
                    date={"11/12 6:00pm"}
                    text={"I think you are bananas!"}
                />
            </Card>
            <Card>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio sint tempore laborum praesentium aspernatur maiores harum sunt doloremque alias quia nobis, sapiente quibusdam aliquid esse error minima, laudantium debitis!</p>
            </Card>
            <Card heading="Last Comment!">
                <Comment
                    author="Bobby Miller"
                    avatar={faker.image.avatar()}
                    date={"07/12 9:10am"}
                    text={"Simply spectacular."}
                />
            </Card>
        </div>
    )
}
