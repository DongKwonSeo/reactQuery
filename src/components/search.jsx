import React, { useEffect } from 'react'
import '../index.css'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import Axios from 'axios'
import { useCallback } from 'react'

const Search = () => {
  const [mock, setMock] = useState()

  // 디바운싱 함수 라이브러리없이 구현하기
  const debounce = (callback, duration) => {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => callback(...args), duration)
    }
  }

  const { data, error } = useQuery(['mockApi', mock], () => {
    // mock 상태가 변해야 호출한다 트리거
    console.log('확인중@@@!')
    return Axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0',
    ).then((res) => res.data)
  })

  const ChangeHandler = useCallback((e) => {
    debounce(setMock(e.target.value), 1000)
  }, [])

  return (
    <div className="hello">
      <h1 className="title">검색 불러오기</h1>
      <input type="text" value={mock || ''} onChange={ChangeHandler} />

      {mock?.length > 0
        ? data?.results
            ?.filter((item) => item.name.toLowerCase().includes(mock))
            .map((item, index) => {
              return <h2 key={index}>{item?.name}</h2>
            })
        : data?.results?.map((item, index) => {
            return <h2 key={index}>{item?.name}</h2>
          })}
    </div>
  )
}

export default Search
