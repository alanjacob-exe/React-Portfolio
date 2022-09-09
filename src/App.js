import { Route, Routes } from 'react-router-dom'
import './app.scss'
import Layout from './Components/Layout/Layout';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}/>
    </Routes>
    </>
  )
}

export default App;
