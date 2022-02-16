import React from 'react'
import '@progress/kendo-theme-default/dist/all.css'
import './App.css'
import { FormOC } from './components/ui/FormOC'
import { AboutPackages } from './components/AboutPackajes'
import { useApi } from './hooks/useApi'

function App() {
  const { apiData, setApiData, loading, setLoading } = useApi()
  return (
    <div className="App">
      <FormOC setApiData={setApiData} setLoading={setLoading} />
      {apiData ?
        <AboutPackages packages={apiData} loading={loading}/>
        :
        <AboutPackages packages={'For report display'}/>
      }
      
    </div>
  )
}

export default App
