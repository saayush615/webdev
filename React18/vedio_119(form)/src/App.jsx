import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError, // custom error
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => { 
    return new Promise((resolve,reject) => { 
      setTimeout(() => {
        resolve()
      }, d * 1000);
     })
   }

  const onSubmit = async (data) => {
    // await delay(3) // simulating network delay

    // Post request to backend
    let r = await fetch("http://localhost:3000/", {method: "POST", headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()

    console.log(data,res)

    // if (data.username !== "Aayush") {
    //   setError("myform", {message: "Credential donot match"}) // jis v key pe error dena chahte ho (myform in this case)
    // }
    // if(data.username === "Raj") {
    //   setError("blocked", {message: "You have been blocked by admin"}) // jis v key pe error dena chahte ho (myform in this case)
    // }
  }

  return (
    <>
    {isSubmitting && 'Loading...'}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input placeholder='username' {...register("username", { required: {value: true, message: 'This field is required'}, minLength: {value: 3, message: 'Min length is 3'}, maxLength: {value: 8, message: 'Max length is 8'} })} type="text" />
          {errors.username && <div>{errors.username.message}</div>}

          <br />

          <input placeholder='password' {...register("password", {required: {value: true, message:'This is required field'}, minLength: {value: 4, message: 'There must 4 digit in password'}})} type="password" />
          {errors.password && <div>{errors.password.message}</div>}

          <br />

          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div>{errors.myform.message}</div>}
          {errors.blocked && <div>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
