import React from "react"
import tw from "twin.macro"
import { CustomInput, InputLabel } from "../styles"

export default function BoxInput({
  label,
  buttonComponent,
  ...inputProps
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  buttonComponent?: React.ReactNode
}) {
  return (
    <div tw="flex items-center justify-between w-full grid grid-cols-[auto 484px] ">
      {label && <InputLabel>{label}</InputLabel>}
      <div tw="grid grid-cols-[1fr auto]">
        <CustomInput {...inputProps} />
        {buttonComponent}
      </div>
    </div>
  )
}
