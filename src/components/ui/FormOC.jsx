import React, { useState } from 'react'
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

export const FormOC = ({ setApiData }) => {
  const maxInput = 20
  const maxArea = 120
  const OSarr = ['Debian', 'Ubuntu', 'CentOS', '']
  const [distro, setDistro] = useState(OSarr[0])

  const handleChange = ({ target }) => {
    setDistro(target.value)
  }
  const handleSubmit = async (data) => {
    console.log(data)
    const dataValue = {
      'os': {
        'name': data.dis,
        'version': data.osversion
      },
      // 'packages': [...data.packages.split('\n').map(p => p.split(','))]
      'packages': [...data.packages.split('\n').map(p => p.split(', ')).map(p => p.join(' ').split(' '))]
    }
    console.log(dataValue)
    console.log(await httpService.send(dataValue))
    const result = await httpService.send(dataValue)
    if (result === 'Request failed with status code 500' || result === 'Response with error') {
      setApiData(result)
    } else {
      const { vulnerableObjects } = result
      setApiData(vulnerableObjects)
    }
    // const { vulnerableObjects } = await httpService.send(dataValue)
    // console.log(vulnerableObjects)
    // setApiData(vulnerableObjects)
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
              // value={distro}
              // value={formRenderProps.valueGetter("dis")}
              val={distro}
              onChange={handleChange}
              component={SelectField}
              data={OSarr}
            />
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

