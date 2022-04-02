import react from "react"
import styled from "@emotion/styled/macro"
import tw from "twin.macro"
import Image from "next/image"

const getIconInfo = (iconType) => {
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

const Container = styled.div`
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

export default function Input({
  iconType,
  value,
  type,
  placeholder,
  onChange,
}) {
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
