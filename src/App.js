import { Route, Routes } from 'react-router-dom'
import './app.scss'
import Home from './Components/Home';
import Layout from './Components/Layout/Layout';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
