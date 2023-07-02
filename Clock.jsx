import React, { useState, useEffect } from 'react';


/*const Clock = ()=>{
    const [time, setTime] = useState(new Date())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date())
        }, 1000)

        return()=>{ clearInterval(interval)}
    },[])

    const formateTime = (date) =>{
        const hours = date.getHours()
        const minuts = date.getMinutes()
        const seconds = date.getSeconds()

        return `${hours} : ${minuts} : ${seconds}`
    }
    
    
    

    return(
        <>
            <div>
                <p>Clock</p>
                <h2>{formateTime(time)}</h2>
            </div>
        </>
    )
}*/

const Clock = ()=>{

    const [time, setTime] = useState(new Date())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date())
        },1000)

        return()=>{clearInterval(interval)}
    },[])

    const formateTime = (date)=>{
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        return `${hours} : ${minutes} : ${seconds}`
    }


    return (
        <>
            <div>
                <p>Clock</p>
                <h1>{formateTime(time)}</h1>
            </div>
        </>
    )
}

export default Clock