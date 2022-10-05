import React, { useState } from "react";
import { useEffect } from "react";
import ChildComponent from "./childcomponent"
import Higerorder from "./higerorder"
import Button from "./button"


const PractComponent = Higerorder(Button)

const Pract = (props) =>{
    
    const [inital,setShowElement]= useState(false)

        const onHover = () =>{
            setShowElement(true)
        }

        const onHoverOut = () =>{
            setShowElement(false)
        }

        useEffect(()=>{console.log("log after setstate")},[onHoverOut])
        const array = ["jaiganesh","sakthi","sarath","raj","kavin"]

        const childfunction = () =>(console.log(`this is from childcomponent ${props?.main}`))

        const  algo = (n) =>{
            let i =0;
            for(;i<n ;i++){
                let j = 0;
                for(j=0; j<n; j++){
                    let k = 0;
                    for(k=0; k<n; k++){
                        console.log("i and j=>",i,j,k)
                    }
                }
            }
        }
    return(        
    <div>
        {/* { inital && <div onClick={ () => setShowElement(false)}>sakthi</div>}
        { !inital && <div onClick={ () => setShowElement(true)}> vel </div>} */}
        <div>sakthivel</div>
        {algo(4)}
        {/* <ChildComponent props={childfunction} main="working" /> */}
       {/* <PractComponent /> */}
        {/* { !inital && <div onMouseOut={() => setShowElement(true)} style={{height:"50px" ,width:"50px", backgroundColor:" #282c34"}}></div>}
        { inital && <div onMouseOut={ () => setShowElement(false)} style={{height:"50px" ,width:"50px", backgroundColor:" #eb4034"}}></div>} */}
        {/* <div onMouseOver={() => onHover()} onMouseOut={ () => onHoverOut()}>raj</div>
        {inital && <div>kumar</div>}
        {array.map((e) => <h1>{e}</h1>)} */}
    </div>
    )
} 

export default Pract