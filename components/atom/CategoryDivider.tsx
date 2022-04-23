import React from "react"
import tw from "twin.macro"

const Container = tw.div`grid w-full mb-[6px] gap-[10px] grid-flow-col items-center`

const CategoryTitle = tw.div`font-bold text-[20px]`

const Divider = tw.div`w-full h-[1px] bg-grey-300`

type Props = {
  category: string
  style?: React.CSSProperties
}

export default function CategoryDivider({ category, style }: Props) {
  return (
    <Container style={{ gridTemplateColumns: "auto 1fr", ...style }}>
      <CategoryTitle>{category}</CategoryTitle>
      <Divider />
    </Container>
  )
}
