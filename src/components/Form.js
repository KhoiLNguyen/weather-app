import React, { useState, useEffect } from 'react'

const Form = ({ geocode }) => {
  
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    geocode(query)
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="location"
        value={search}
        placeholder="Enter Location..."
        onChange={e => setSearch(e.target.value)}  
      />
      <button type="submit">Get weather!</button>
    </form>
  )
}

export default Form
