import React from "react"
import tw from "twin.macro"

const CustomButton = tw.button`outline-none rounded-[40px] text-[24px] text-center py-[12px] w-full border-skyblue-300 border-[1px] text-skyblue-300 hocus:bg-skyblue-300 hocus:text-white`

type Props = {
  label?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ label, type, onClick }: Props) {
  return (
    <CustomButton onClick={onClick} type={type}>
      {label}
    </CustomButton>
  )
}
