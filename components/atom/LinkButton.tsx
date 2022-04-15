import React from "react"
import tw from "twin.macro"

const CustomLinkButton = tw.a`text-[20px] underline text-center text-skyblue-300`

type Props = {
  label?: string
  href?: string
}

export default function LinkButton({ label, href }: Props) {
  return <CustomLinkButton href={href}>{label}</CustomLinkButton>
}
