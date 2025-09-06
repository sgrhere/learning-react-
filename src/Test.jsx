import Button from "./Button";
import Card from "./Card";


function Test() {
    return (
        <>
            <h1> I am test Component.</h1>

            {/* 
            Suppose we need 3 buttons with same styling, this is the older style that is done in html. But in React, we will make the component of the repeating element and then import it use it by applying props
            <button style={{backgroundColor: 'red' , padding: '10px' , color: 'white'}}>Register</button>
            <button style={{backgroundColor: 'red' , padding: '10px' , color: 'white'}}>Login</button>
            <button style={{backgroundColor: 'red' , padding: '10px' , color: 'white'}}>Logout</button> 
            */}

            <Button haha="Register" />
            <Button haha="Login" />
            <Button haha="Logout" />
            <Card title="TestPage" btn="test garna parxa" />

        </>
    )
}

export default Test;