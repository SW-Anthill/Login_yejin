import React, { useEffect, useMemo, useState } from "react"
import tw from "twin.macro"
import Card from "../components/atom/Card"
import { PageTitle } from "../components/styles"

const GridWrapper = tw.div`grid grid-cols-3 gap-[16px]`

export default function List() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("list") ?? "[]"))
  }, [])

  return (
    <div tw="w-[821px] mx-auto">
      <PageTitle>배딜 목록</PageTitle>
      <GridWrapper tw="mt-[25px]">
        {data.map(({ thumbnail, orderName, store }: any, idx: number) => (
          <Card
            key={idx}
            thumbnailSrc={thumbnail}
            title={orderName}
            storeName={store.name}
            minOrderPrice={store.minOrderPrice}
          />
        ))}
      </GridWrapper>
    </div>
  )
}
