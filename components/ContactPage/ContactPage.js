import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ContactPageStyle.css";
import Title from "../Title/index.js";
import Form from "../Form/Form.js";
import "../Form/formStyle.css";

function Contact(){
    return(<div>
        <Title> Contact: </Title>
            <h2>angelwork128@outlook.com</h2>
            <h2> Send me a message:</h2>
                <div className="formWrapper">
                 <Form></Form>
                 </div>
                <button>Send</button>
            <h2>Or find me here:</h2>
            <h3>github</h3>
            <h3>linkdin</h3>
            <div>
                <h2>Download my CV here:</h2>
                <h3>PDF</h3>
            </div> </div>
    );
}


export default Contact