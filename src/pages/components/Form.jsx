import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Form = () => {

    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [message, setMessage] = useState()

    const handleSubmit =  async (e) => {
        e.preventDefault()
        const data = {name, age, message}
        await axios.post(`${process.env.API_URL}/api/users`, data)
    }

 


  return (
    <>
    <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='name'/><br/>
        <input onChange={(e) => setAge(e.target.value)} value={age} type="text" placeholder='age' /><br />
        <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="" id="" cols="30" rows="10">Message</textarea><br />
        <button className='bg-purple-500 rounded-xl px-4 py-3 text-white'>Submit</button>
    </form>
    </>
  )
}

export default Form