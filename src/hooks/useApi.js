import React, { useState, useContext } from 'react'

const ApiContext = React.createContext()

export const useApi = () => {
  return useContext(ApiContext)
}

export const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <ApiContext.Provider value={{ apiData, setApiData, loading, setLoading } }>
      {children}
    </ApiContext.Provider>
  )
}