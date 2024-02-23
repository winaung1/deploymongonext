import { useSession, signIn, signOut } from "next-auth/react"
import Form from "./components/Form"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Component() {
  const { data: session } = useSession()
  const [users, setUsers] = useState()

  useEffect(() => {
    axios.get('http://localhost:3000/api/users').then(res => {
        setUsers(res.data.test)
    })
}, [])
  if (session) {
    return (
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
          {session.user.name} <br />
          <img className="rounded-xl" src={session.user.image}/><br/>
          </div>
          <button onClick={() => signOut()} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Signout From Your Account</button>
        </div>
        <Form/>
        <div>
    </div>
    {
          users?.map(user => (
              <div key={user._id}>
                  <p>{user.name}</p>
              </div>
          ))
      }
      </div>
    )
  }
  return (
    <div className="bg-blue-900 h-screen w-full flex items-center justify-center">
    <button onClick={() => signIn('google')} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login To Your Account</button>
      {
          users?.map(user => (
              <div key={user._id}>
                  <p>{user.name}</p>
              </div>
          ))
      }
    </div>
  )
}
