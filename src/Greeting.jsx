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

function Greeting({ title, pText, children }) {
    const pStyle = {fontSize: '40px', color: '#ddd'}
    return (
        <div className="greeting-wrapper">
            <h2 className="title">{ title }</h2>
            <p style={{fontSize: '40px', color: '#ddd'}}> {pText} </p>
            ----{children}----
            <p style={pStyle}> {pText} </p>
            <Title />
        </div>
    )
}

export default Greeting