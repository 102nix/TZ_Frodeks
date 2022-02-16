import React, { useState, useEffect } from 'react'
import {
  Form,
  Field,
  FormElement,
} from "@progress/kendo-react-form"
import { Button } from "@progress/kendo-react-buttons"
import '@progress/kendo-theme-default/dist/all.css'
import { TextField, inputValidator } from '../common/form/TextField'
import { SelectField } from '../common/form/SelectField'
import { FormTextArea, textAreaValidator } from '../common/form/FormTextArea'
import httpService from '../../services/service'

export const FormOC = ({ setApiData, setLoading }) => {
  const maxInput = 20
  const maxArea = 1120
  const OSarr = ['Debian', 'Ubuntu', 'CentOS', '']
  const [distro, setDistro ] = useState('')
  const [selectValidate, setSelValidate] = useState('')

  const handleChange = ({ target }) => {
    setDistro(target.value)
  }

  function validate(dataSelect) {
    if (dataSelect === undefined) setSelValidate('Please select!')
  }

  useEffect(() => {
    setSelValidate('')
  },[distro])

  const handleSubmit = async (data) => {
    validate(data.dis)
    setLoading(true)
    const dataValue = {
      'os': {
        'name': data.dis,
        'version': data.osversion
      },
      'packages': [...data.packages.split('\n').map(p => p.split(', ')).map(p => p.join(' ').split(' '))]
    }
    const result = await httpService.send(dataValue)
    if (result === 'Request failed with status code 500' || result === 'Response with error') {
      setApiData(result)
    } else {
      const { vulnerableObjects } = result
      setApiData(vulnerableObjects)
    }
    setLoading(false)
  } 
  return (
    <Form
      initialValues={{
        osversion: "",
      }}
      onSubmit={handleSubmit}
      render={(formRenderProps, distro) => (
        <FormElement
          style={{
            width: 250,
            color: 'white'
          }}
        >
          <fieldset className={"k-form-fieldset"}>
            <Field
              id={"osversion"}
              name={"osversion"}
              label={"OS version:"}
              max={maxInput}
              value={formRenderProps.valueGetter("osversion")}
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
              data={OSarr}
            />
            {selectValidate && <p className="error">{selectValidate}</p>}
            <Field
              id={"packages"}
              name={"packages"}
              label={"Packages:"}
              max={maxArea}
              value={formRenderProps.valueGetter("packages")}
              hint={"Hint: Enter your text here"}
              component={FormTextArea}
              validator={textAreaValidator}
            />
            <div className="k-form-buttons k-justify-content-center">
              <Button
                themeColor={"info"}
                size={"large"}
                type={"submit"}
                disabled={!formRenderProps.allowSubmit}
                style={{
                  width: 150
                }}
              >
                Audit
              </Button>
            </div>
          </fieldset>
        </FormElement>
      )}
    />
  )
}

