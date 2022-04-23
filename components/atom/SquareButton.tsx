import React from "react"
import tw from "twin.macro"

const CustomButton = tw.button`outline-none whitespace-nowrap rounded-[2px] text-[16px] bg-green-300 text-center h-[46px] px-[12px] text-white`

type Props = {
  label?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function SquareButton({ label, ...otherProps }: Props) {
  return <CustomButton {...otherProps}>{label}</CustomButton>
}
