import React from "react"
import Article from "./Article"

function ArticleList ({post}){

const newArry = post.map(onePost  =>{

return(
    <Article key = {onePost.id} title={onePost.title} date = {onePost.date} preview={onePost.preview}/>
)

} )

    return(
        <main>
                {newArry}
        </main>
    )
}
export default ArticleList