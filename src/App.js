import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import AllRoutes from './components/AllRoutes'
import {QueryClientProvider , QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import Navbar from './components/Navbar'
const queryClient=new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{backgroundImage:'url("https://crowdforthink.com/assets/uploads/blogs/2d5e74db16c8f4e81c1c27fa4e390620.jpeg")',minHeight:'100vh'
        // :'rgb(165, 165, 91)'
        }}>
        <Navbar />
        <AllRoutes />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App