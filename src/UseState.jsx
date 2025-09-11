import { useState } from "react";

function UseState() {
    const [count, setCount] = useState(0)
    const [data, setData]= useState({
        name: "SGR",
        age: 22
    })

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
            <h1>You are {data.name} and you are {data.age} </h1>
        </>
    )
}

export default UseState;