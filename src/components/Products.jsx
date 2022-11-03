import React, { useState } from 'react'
import useProducts from '../hooks/use-products'
import { useQuery } from '@tanstack/react-query'

export default function Products() {
  const [checked, setChecked] = useState(false)

  // useQuery 적용하기
  const { data, isLoading, error } = useQuery(['testApi'], async () => {
    //첫번쨰 자리 testApi이름이 만들어 준다.
    return fetch(`data/products.json`).then((res) => res.json())
    //두번쨰 api
  })
  // 마지막 옵션

  // const [loading, error, products] = useProducts({ salesOnly: checked })
  const handleChange = () => setChecked((prev) => !prev)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{error}</p>

  return (
    <>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Show Only 🔥 Sale
      </label>
      <ul></ul>
    </>
  )
}
