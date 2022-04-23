import React, { useState } from "react"
import tw from "twin.macro"
import BoxInput from "../components/atom/BoxInput"
import RoundButton from "../components/atom/RoundButton"
import CategoryDivider from "../components/atom/CategoryDivider"
import SquareButton from "../components/atom/SquareButton"
import { InputLabel } from "../components/styles"
import Textarea from "../components/atom/Textarea"
import { useFormik } from "formik"

const Container = tw.form`w-[600px] mx-auto flex flex-col items-center justify-center`

const Title = tw.div`font-bold w-full text-[40px] mt-[70px]`

const LabelButton = tw.label`whitespace-nowrap cursor-pointer flex items-center rounded-[2px] text-[16px] bg-green-300 text-center h-[46px] px-[12px] text-white`

type InputValues = {
  orderName?: string
  desc?: string
  storeName?: string
  storeAddress?: string
  minOrderPrice?: number
  menuName?: string
  menuCount?: number
  menuPrice?: number
}

export default function Create() {
  const [thumbnail, setThumbnail] = useState<File>()
  const { handleChange, handleSubmit, values } = useFormik<InputValues>({
    initialValues: {},
    onSubmit: (values) => {
      if (
        !Object.values(values).every(
          (value) => value !== undefined && value !== ""
        ) ||
        !thumbnail
      ) {
        alert("내용을 모두 입력해주세요.")
        return
      }
      localStorage.setItem("orderName", values.orderName ?? "")
      localStorage.setItem("desc", values.desc ?? "")
      localStorage.setItem("thumbnail", URL.createObjectURL(thumbnail))
      localStorage.setItem("orderName", values.orderName ?? "")
      const item = {
        name: values.menuName,
        quantity: values.menuCount,
        price: values.menuPrice,
      }
      localStorage.setItem("items", JSON.stringify(item))
    },
  })

  return (
    <Container onChange={handleChange} onSubmit={handleSubmit}>
      <Title>배딜 생성</Title>
      <CategoryDivider category="배딜 설명" style={{ marginTop: "27px" }} />
      <div tw="w-full grid gap-[8px]">
        <BoxInput label="배딜 제목" name="orderName" value={values.orderName} />
        <Textarea label="상세 설명" name="desc" value={values.desc} />
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
        <BoxInput label="이름" name="storeName" />
        <div tw="flex items-center">
          <BoxInput label="위치" tw="w-[356.5px]" />
          <SquareButton label="우편 번호 찾기" />
        </div>
        <BoxInput
          label=" "
          placeholder="상세 주소 입력"
          name="storeAddress"
          value={values.storeAddress}
        />
        <BoxInput
          label="주문 최소 금액"
          name="minOrderPrice"
          value={values.minOrderPrice}
        />
      </div>
      <CategoryDivider category="메뉴 정보" style={{ marginTop: "60px" }} />
      <div tw="grid grid-flow-col gap-[5px]">
        <div>
          <InputLabel>구매자</InputLabel>
          <BoxInput tw="w-[111px]" />
        </div>
        <div>
          <InputLabel>메뉴 이름</InputLabel>
          <BoxInput tw="w-[237px]" name="menuName" value={values.menuName} />
        </div>
        <div>
          <InputLabel>수량</InputLabel>
          <BoxInput tw="w-[103px]" name="menuCount" value={values.menuCount} />
        </div>
        <div>
          <InputLabel>가격</InputLabel>
          <BoxInput tw="w-[134px]" name="menuPrice" value={values.menuPrice} />
        </div>
      </div>
      <RoundButton
        label="완료"
        type="submit"
        tw="text-[16px] text-green-300 border-green-300 w-[114px] mt-[40px] ml-auto hover:bg-green-300"
      />
    </Container>
  )
}
