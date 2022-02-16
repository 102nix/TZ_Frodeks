import * as React from "react"
import { FieldWrapper } from "@progress/kendo-react-form"
import { Label, Hint, Error } from "@progress/kendo-react-labels"
import { TextArea } from "@progress/kendo-react-inputs";

export const textAreaValidator = (value) => (!value ? "Please enter a text." : "");

export const FormTextArea = (fieldRenderProps) => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    type,
    optional,
    max,
    value,
    ...others
  } = fieldRenderProps
  const showValidationMessage = touched && validationMessage
  const showHint = !showValidationMessage && hint
  const hindId = showHint ? `${id}_hint` : ""
  const errorId = showValidationMessage ? `${id}_error` : ""
  return (
    <FieldWrapper>
      <Label
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        optional={optional}
      >
        {label}
      </Label>
      <div className={"k-form-field-wrap"}>
        <TextArea
          valid={valid}
          type={type}
          id={id}
          disabled={disabled}
          maxLength={max}
          rows={14}
          ariaDescribedBy={`${hindId} ${errorId}`}
          {...others}
        />
        <Hint
          direction={"end"}
          style={{
            position: "absolute",
            right: 0,
          }}
        >
          {value?.length} / {max}
        </Hint>
        {showHint && <Hint id={hindId}>{hint}</Hint>}
        {showValidationMessage && (
          <Error id={errorId}>{validationMessage}</Error>
        )}
      </div>
    </FieldWrapper>
  )
}