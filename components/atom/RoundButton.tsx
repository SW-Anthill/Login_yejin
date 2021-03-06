import React from "react"
import tw from "twin.macro"

const CustomButton = tw.button`outline-none rounded-[40px] text-[24px] text-center py-[12px] w-full border-skyblue-300 border-[1px] text-skyblue-300 hover:bg-skyblue-300 hover:text-white`

type Props = {
  label?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function RoundButton({ label, ...otherProps }: Props) {
  return <CustomButton {...otherProps}>{label}</CustomButton>
}
