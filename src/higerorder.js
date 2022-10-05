import React,{useState} from 'react'

const Higerorder = (OrginalComponent) => {

    const NewFunction = () => {

        const [count,setCount] = useState(0)

        const clickHandler = () => {
            setCount(prevState => prevState+1)
        }

        return (
            <OrginalComponent count={count} clickHandler={clickHandler} />
          )
    }
    return NewFunction
  
}

export default Higerorder


