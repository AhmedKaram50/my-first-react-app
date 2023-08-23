import React from "react"
import Title from "./Title"

// function Greeting() {
//     return (
//         <React.Fragment>
//             <h2 className="title">Ahmed Is Here Learning React</h2>
//             <p>This is Paragraph</p>
//         </React.Fragment>
//     )
// }

function Greeting() {

    const pStyle = {fontSize: '40px', color: '#ddd'}
    const pText = "This is Paragraph 33"
    const title = "Ahmed Is Here Learning React"

    return (
        <>
            <h2 className="title">{ title }</h2>
            <p style={{fontSize: '40px', color: '#ddd'}}> {pText} </p>
            <p style={pStyle}> {pText} </p>
            <Title />
        </>
    )
}

export default Greeting