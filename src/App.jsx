import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Chathumini senethya</h1>
   
      <ProductCard name = "Apple ipad" price ="$499 " image = "https://www.apple.com/v/ipad-11/d/images/overview/connect/stream__b9rd2zagax1e_large_2x.jpg"/>
      <ProductCard name ="Mac Book pro " price ="$1299" image = "https://tse1.mm.bing.net/th/id/OIP.T0RUfUTMEO1erwyCy1eWVwHaE7?cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3"/>
      
      
    </>
  )
}

export default App
