import React, { useState } from 'react'

export default function Form() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [users, setUsers] = useState([])

  const onSubmit = e => {
    e.preventDefault()
    if (!user.trim()) return
    setUsers([{ id: Date.now(), name: user }, ...users])
    setUser('')
    setPass('')
  }

  const remove = id => setUsers(users.filter(u => u.id !== id))

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={user}
          onChange={e => setUser(e.target.value)}
          placeholder="username"
        />
        <input
          value={pass}
          onChange={e => setPass(e.target.value)}
          placeholder="password"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} <button onClick={() => remove(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}