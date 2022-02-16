import React, { useState, useContext } from 'react'

const ApiContext = React.createContext()

export const useApi = () => {
  return useContext(ApiContext)
}

export const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState('')
  return (
    <ApiContext.Provider value={{ apiData, setApiData } }>
      {children}
    </ApiContext.Provider>
  )
}