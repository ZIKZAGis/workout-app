import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Router from './routes/Routes'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router/>
    </QueryClientProvider>
  </React.StrictMode>,
)
