import React from "react"
import DaumPostcode from "react-daum-postcode"

type Props = {
  onSelect: (address: string) => void
}

export default function Postcode({ onSelect }: Props) {
  return (
    <DaumPostcode
      autoClose={false}
      errorMessage=""
      onComplete={(data) => {
        let fullAddress = data.address
        let extraAddress = ""

        if (data.addressType === "R") {
          if (data.bname !== "") {
            extraAddress += data.bname
          }
          if (data.buildingName !== "") {
            extraAddress +=
              extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName
          }
          fullAddress += extraAddress !== "" ? ` (${extraAddress})` : ""
        }

        onSelect(fullAddress)
      }}
    />
  )
}
