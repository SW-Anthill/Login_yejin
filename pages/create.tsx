import React, { useState } from "react"
import tw from "twin.macro"
import BoxInput from "../components/atom/BoxInput"
import Button from "../components/atom/RoundButton"
import CategoryDivider from "../components/atom/CategoryDivider"
import SquareButton from "../components/atom/SquareButton"
import { InputLabel } from "../components/styles"
import Textarea from "../components/atom/Textarea"
import RoundButton from "../components/atom/RoundButton"

const Container = tw.div`w-[600px] mx-auto flex flex-col items-center justify-center`

const Title = tw.div`font-bold w-full text-[40px] mt-[70px]`

const LabelButton = tw.label`whitespace-nowrap cursor-pointer flex items-center rounded-[2px] text-[16px] bg-green-300 text-center h-[46px] px-[12px] text-white`

export default function Create() {
  const [thumbnail, setThumbnail] = useState<File>()
  return (
    <Container>
      <Title>배딜 생성</Title>
      <CategoryDivider category="배딜 설명" style={{ marginTop: "27px" }} />
      <div tw="w-full grid gap-[8px]">
        <BoxInput label="배딜 제목" />
        <Textarea label="상세 설명" />
        <div tw="flex items-center">
          <input
            type="file"
            id="thumbnail"
            tw="hidden"
            onChange={(e) => setThumbnail(e.target.files?.[0])}
          />
          <BoxInput
            label="썸네일"
            tw="w-[392.5px]"
            disabled
            value={thumbnail?.name ?? ""}
          />
          <LabelButton htmlFor="thumbnail">파일 찾기</LabelButton>
        </div>
      </div>
      <CategoryDivider category="가게 정보" style={{ marginTop: "60px" }} />
      <div tw="w-full grid gap-[8px]">
        <BoxInput label="이름" />
        <div tw="flex items-center">
          <BoxInput label="위치" tw="w-[356.5px]" />
          <SquareButton label="우편 번호 찾기" />
        </div>
        <BoxInput label=" " placeholder="상세 주소 입력" />
        <BoxInput label="주문 최소 금액" />
      </div>
      <CategoryDivider category="메뉴 정보" style={{ marginTop: "60px" }} />
      <div tw="grid grid-flow-col gap-[5px]">
        <div>
          <InputLabel>구매자</InputLabel>
          <BoxInput tw="w-[111px]" />
        </div>
        <div>
          <InputLabel>메뉴 이름</InputLabel>
          <BoxInput tw="w-[237px]" />
        </div>
        <div>
          <InputLabel>수량</InputLabel>
          <BoxInput tw="w-[103px]" />
        </div>
        <div>
          <InputLabel>가격</InputLabel>
          <BoxInput tw="w-[134px]" />
        </div>
      </div>
      <RoundButton
        label="완료"
        tw="text-[16px] text-green-300 border-green-300 w-[114px] mt-[40px] ml-auto hocus:bg-green-300"
      />
    </Container>
  )
}
