import React from 'react'
import { DropDownList } from "@progress/kendo-react-dropdowns"
import { Label } from "@progress/kendo-react-labels"
import { FieldWrapper } from "@progress/kendo-react-form"

export const SelectField = ({ id, name, val, onChange, data, label }) => {
  
  return (
    <FieldWrapper>
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
        defaultValue={"Change OC"}
        value={val}
        onChange={onChange}
        id={id}
        name={name}
      />
  </FieldWrapper>
  )

}