import React from "react"

function Article({title, date="January 1, 1970", preview}){
// const deflt = {date}?  {date} : "January 1, 1970"
    return (
        <article>
            <h3>
                {title}
            </h3>
            <small>
                {/* {deflt} */}
                {date}
            </small>
            <p>
                {preview}
            </p>
        </article>
    )
}
export default Article