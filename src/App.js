import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import AllRoutes from './components/AllRoutes'
import {QueryClientProvider , QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
const queryClient=new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/users'>Traditional Data</Link>
            </li>
            <li>
              <Link to='/rq-users'>RQ Data</Link>
            </li>
            <li>
              <Link to='/infinit-scrolling'>Infinit Scrolling Data</Link>
            </li>
          </ul>
        </nav>
        <AllRoutes/>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App