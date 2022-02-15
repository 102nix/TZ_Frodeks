import React, { useState } from 'react'
// import { DropDownList } from "@progress/kendo-react-dropdowns"
import {
  Form,
  Field,
  FormElement,
} from "@progress/kendo-react-form"
import { Button } from "@progress/kendo-react-buttons"
import { TextField, inputValidator } from './components/common/form/TextField'
import '@progress/kendo-theme-default/dist/all.css'
import './App.css'
import { SelectField } from './components/common/form/SelectField'

function App() {
  const max = 20
  const OCarr = ['Debian', 'Ubuntu', 'CentOS', '']
  const [distro, setDistroue] = useState(OCarr[0])
  // const [version, setVersion] = useState('')

  const handleChange = ({ target }) => {
    setDistroue(target.value)
  }
  // console.log(distro)
  const handleSubmit = (data) => console.log(data)
  return (
    <div className="App">
      {/* <div>
        <div>OS name:</div>
        <DropDownList
          style={{
            width: "300px",
          }}
          data={OCarr}
          value={distro}
          onChange={handleChange}
        />
      </div> */}
      <Form
        initialValues={{
          username: "",
        }}
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <FormElement
            style={{
              width: 250,
              position: "absolute",
            }}
          >
            <fieldset className={"k-form-fieldset"}>
              <Field
                id={"username"}
                name={"username"}
                label={"Username:"}
                max={max}
                value={formRenderProps.valueGetter("username")}
                hint={"Hint: Enter your text here"}
                component={TextField}
                validator={inputValidator}
              />
              <Field
                id={"dis"}
                name={"dis"}
                label={"OS name:"}
                val={distro}
                onChange={handleChange}
                component={SelectField}
                data={OCarr}
              />
              <div className="k-form-buttons k-justify-content-end">
                <Button
                  themeColor={"primary"}
                  type={"submit"}
                  disabled={!formRenderProps.allowSubmit}
                >
                  Send
                </Button>
              </div>
            </fieldset>
          </FormElement>
        )}
      />
    </div>
  );
}

export default App
