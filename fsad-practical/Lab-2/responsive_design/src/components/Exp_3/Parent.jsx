import { useState } from "react";
import Child from "./Child";
export default function Parent(){

    const[name,setName] = useState('n')
    const[salary,setSalary] = useState(0)
    const[location,setLocation] = useState('l')


    function Display(){
        return(
            <div>
                <h1>Name: {name}</h1>
                <h1>Salary: {salary}</h1>
                <h1>Location: {location}</h1>
            </div>
        )
    }

    const changeUser = (n,s,l) => {
        setName(n)
        setSalary(s)
        setLocation(l)
    }

    return(
        <div>
            <Child changeUser={changeUser}/>
            <Display/>
        </div>
    )
}


