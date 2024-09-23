import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = () => {
  const [username, setUsername] = useState("");
  const [surname,setSurname]= useState("")
  const onHandleUsername= (event)=>{
    setUsername(event.target.value)
  }
  const onHandleSurname =(event)=>{
    setSurname(event.target.value)
  }
  const login =()=>{
    const data= {
      username,
      surname
    }
    console.log(data)
  }
  
  return (
    <div>
     <Input onChange={(onHandleUsername)} value={username} placeholder="Username..."/>
     <Input onChange={(onHandleSurname)} value={surname} placeholder="Surname..." />
     <Button disabled={username==="" ||  surname==="" ? true:false} btnText={"Login"} disable onClick={login}/>
    </div>
  )
}

export default Login