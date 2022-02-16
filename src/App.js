import React from 'react'
import '@progress/kendo-theme-default/dist/all.css'
import './App.css'
import { FormOC } from './components/ui/FormOC'
import { AboutPackages } from './components/AboutPackajes'
import { useApi } from './hooks/useApi'
import { Typography } from "@progress/kendo-react-common";

function App() {
  const { apiData, setApiData } = useApi()
  return (
    <div className="App">
      <FormOC setApiData={setApiData} />
      {apiData ?
        <AboutPackages packages={apiData}/>
        :
        <AboutPackages packages={'For report display'}/>
      }
      
    </div>
  )
}

export default App
