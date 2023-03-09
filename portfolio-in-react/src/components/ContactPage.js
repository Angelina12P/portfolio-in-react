import React from "react";

function Contact(){
    return(
        <div>
            <h1> Contact:</h1>
            <h2>angelwork128@outlook.com</h2>
            <h2> Send me a message:</h2>
            <form>
                <input type="text">Name:</input>
                <input type="email">Email</input>
                <input type="text">Message</input>
                <button>Send</button>
            </form>
            <h2>Or find me here:</h2>
            <h3>github</h3>
            <h3>linkdin</h3>
            <div>
                <h2>Download my CV here:</h2>
                <h3>PDF</h3>
            </div>
        </div>
    )
}


export default Contact