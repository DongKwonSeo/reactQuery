import React from 'react'
import './App.css'
// import MainProducts from './components/MainProducts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Search from './components/search'

// Create a client
const queryClient = new QueryClient()

export default function App() {
  return (
    // QueryClientProvider wrap
    <QueryClientProvider client={queryClient}>
      {/* <MainProducts /> */}
      <Search />
    </QueryClientProvider>
  )
}
