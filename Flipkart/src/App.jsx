import { Box } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import DetailView from './components/details/DetailsView'

//components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { DataProvider } from './context/DataProvider'


function App() {

  return (
    <DataProvider className="App">
      <Box style={{ marginTop: 54 }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </DataProvider>
  )
}

export default App
