// import { useMemo } from 'react'
// import { Provider, Loading } from '@shopify/app-bridge-react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFound from './pages/NotFound'


function App() {
  

  // const config = {
  //   apiKey: import.meta.env.VITE_SHOPIFY_API_KEY,
  //   host: import.meta.env.VITE_SHOPIFY_SHOP_DOMAIN,
  //   forceRedirect: true,
  // };

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
