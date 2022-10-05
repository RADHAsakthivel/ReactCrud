import React from 'react'

 const ChildComponent = ({props,main}) => {
    console.log("props=>",props)
    console.log("main=>",main)
    return (
    <div>childcomponent</div>
  )
}


export  default ChildComponent