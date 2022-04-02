import react from "react"
import tw from "twin.macro"

const CustomLinkButton = tw.a`text-[20px] underline text-center text-skyblue-300`

export default function LinkButton({ label, href }) {
  return <CustomLinkButton href={href}>{label}</CustomLinkButton>
}
