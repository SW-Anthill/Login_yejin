import React from "react"
import styled from "@emotion/styled/macro"
import tw from "twin.macro"

type IconType = "user" | "lock"

const getIconInfo = (iconType: IconType) => {
  switch (iconType) {
    case "user":
      return {
        width: "22px",
        height: "24px",
        padding: "0 22px 0 8px",
      }
    case "lock":
      return {
        width: "18px",
        height: "24px",
        padding: "0 24px 0 10px",
      }
    default:
      return {}
  }
}

const Container = styled.div<{ iconType: IconType }>`
  ${tw`px-[5px] border-b-grey-400 border-b-[1px] w-full flex items-center`}
  .icon {
    ${({ iconType }) => {
      const { width, height, padding } = getIconInfo(iconType)
      return `
      background-image: url("/${iconType}_grey.svg");
      background-size: contain;
      margin: ${padding};
      width: ${width};
      height: ${height};
    `
    }};
  }
  &:focus-within,
  :hover {
    ${tw`border-b-skyblue-300`}
    .icon {
      background-image: ${({ iconType }) => `url("/${iconType}_skyblue.svg")`};
    }
  }
`

const CustomInput = tw.input`outline-none text-[16px] py-[9px] w-full placeholder-grey-400`

type Props = {
  value?: string
  type?: string
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  iconType: IconType
}

export default function Input({
  iconType,
  value,
  type,
  placeholder,
  onChange,
}: Props) {
  return (
    <Container iconType={iconType}>
      {iconType && <div className="icon" tw="bg-no-repeat box-content" />}
      <CustomInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Container>
  )
}
