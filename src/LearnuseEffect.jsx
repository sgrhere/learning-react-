import { useEffect, useState } from "react"


function LearnuseEffect(){
/*
    // --- first type --- executes on
    useEffect(()=>{
        console.log("you noob");
        // data fetch logic
    },[])
*/

const[count,setCount]=useState(0)
const[like,setLike]=useState(1)

const increaseCount =()=>{
    setCount(count +1)
}

const decreaseCount =()=>{
    setCount(count -1)
}

const likebtn =()=>{
    setLike(like+1)
}


/*
// --- second type ---

useEffect(()=>{
    console.log("hahaha")
},[count,like])


useEffect(()=>{
    // login, jati ahile like state ma value xa tyo backend ma pathaidine code
},[like])
*/

// --- third type ---
useEffect(()=>{
    console.log("execute everytime without any state"); 
})

    return (
        <>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        <h2>Like:{like}</h2>
        <button onClick={likebtn}>Like me</button>
        </>
    )
}

export default LearnuseEffect