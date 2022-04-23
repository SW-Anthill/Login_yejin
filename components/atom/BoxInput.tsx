import React from "react"
import tw from "twin.macro"
import { InputLabel } from "../styles"

const CustomInput = tw.input`outline-none border-green-300 w-[484px] border-[1px] text-[16px] p-[6px] h-[46px] placeholder-grey-400 rounded-[2px]`

export default function BoxInput({
  label,
  ...otherProps
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <div tw="flex items-center justify-between w-full">
      {label && <InputLabel>{label}</InputLabel>}
      <CustomInput {...otherProps} />
    </div>
  )
}
