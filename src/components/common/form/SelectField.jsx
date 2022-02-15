import React from 'react'
import { DropDownList } from "@progress/kendo-react-dropdowns"
import { Label } from "@progress/kendo-react-labels"

export const SelectField = ({ id, name, val, onChange, data, label }) => {
  
  return (
    <div>
      <Label
        editorId={id}
      >
        {label}
      </Label>
      <DropDownList
        style={{
          width: "300px",
        }}
        data={data}
        value={val}
        onChange={onChange}
        id={id}
        name={name}
      />
  </div>
  )

}