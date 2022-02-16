import React from 'react'
import { Typography } from "@progress/kendo-react-common";


export const AboutPackages = ({ packages }) => {
  console.log(packages)
  return (
    <div className="show-packages">
      {typeof packages === 'string' ?
        <Typography.h3>{packages}</Typography.h3>
        :
        <>
          <Typography.h3>Audit result:</Typography.h3>
            {packages.map(p => ((
              <span key={p.version}> 
                <Typography.p style={{marginBottom: 2}}>Package name: <b>{p.name}</b></Typography.p>
                <Typography.p style={{marginBottom: 2}}>Architecture: <b>{p.arch}</b></Typography.p>
                <Typography.p style={{marginBottom: 2}}>Package version: <b>{p.version}</b></Typography.p>
                {p.vulns.map(v => ((
                  <span key={v.id}>
                    <Typography.p style={{marginBottom: 1}}>ID: <b>{v.id}</b></Typography.p>
                    <Typography.p style={{marginBottom: 1}}>Type: <b>{v.type}</b></Typography.p>
                    <Typography.p style={{marginBottom: 1}}>Related: <b>{v.related}</b></Typography.p>
                    <Typography.p style={{marginBottom: 1}}>Reason: <b>{v.reason}</b></Typography.p>
                  </span>
                )))}
              </span>
              )))
            }
        </>
      }
      
    </div>
  )
}