import React from "react"
import tw from "twin.macro"
import { InputLabel } from "../styles"

const CustomTextarea = tw.textarea`outline-none border-green-300 w-[484px] border-[1px] text-[16px] p-[6px] h-[108px] placeholder-grey-400 rounded-[2px]`

export default function Textarea({
  label,
  ...otherProps
}: React.InputHTMLAttributes<HTMLTextAreaElement> & { label?: string }) {
  return (
    <div tw="flex justify-between w-full">
      {label && <InputLabel tw="mt-[6px]">{label}</InputLabel>}
      <CustomTextarea {...otherProps} />
    </div>
  )
}
