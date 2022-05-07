import Image from "next/image"
import React, { useEffect, useState } from "react"
import tw from "twin.macro"

const Container = tw.div`grid grid-rows-[165px 1fr] w-[263px] h-[330px]  shadow-[0px 0px 3px rgba(0, 0, 0, 0.25)] overflow-hidden`

const Thumbnail = tw.img`w-full h-full`

const Title = tw.div`text-[18px]`

const GreyText = tw.div`text-grey-400`

type Props = {
  thumbnailSrc: string
  title: string
  storeName: string
  minOrderPrice: number
}

export default function Card({
  thumbnailSrc,
  title,
  storeName,
  minOrderPrice,
}: Props) {
  return (
    <Container>
      <Thumbnail src={thumbnailSrc ?? ""} />
      <div tw="py-[5px] px-[6px] flex flex-col justify-between">
        <Title>{title}</Title>
        <div tw="grid grid-cols-[auto 1fr] text-[16px] gap-[0 16px]">
          <GreyText>가게 이름</GreyText>
          <div>{storeName}</div>
          <GreyText>최소 주문 금액</GreyText>
          <div>{minOrderPrice}</div>
        </div>
      </div>
    </Container>
  )
}
