import './Style.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Feedback from './Feedback';
import DesignsBedroom from './Designs-bedroom';
import DesignsBathroom from './Designs-bathroom';
import DesignsKitchen from './Designs-kitchen';
import DesignsLivingRoom from './Designs-livingroom';
import DesignsDiningRoom from './Designs-diningroom';
import Furniture from './Furniture';
import Kitchen from './kitchen';
import Lighting from './Lighting';
import Decor from './Decor';
import Bathroom from './Bathroom';
import Designer from './Designer';
import Wishlist from './Wishlist';
import { WishlistProvider } from './WishlistContext';


function App() {

  return (
    <>
    <BrowserRouter>
    <WishlistProvider>
    <Navbar/>
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/design-bed' element={<DesignsBedroom/>}/>
      <Route path='/design-B' element={<DesignsBathroom/>}/>
      <Route path='/design-K' element={<DesignsKitchen/>}/>
      <Route path='/design-L' element={<DesignsLivingRoom/>}/>
      <Route path='/design-D' element={<DesignsDiningRoom/>}/>
      <Route path='/furniture' element={<Furniture/>}/>
      <Route path='/kitchen' element={<Kitchen/>}/>
      <Route path='/lighting' element={<Lighting/>}/>
      <Route path='/decor' element={<Decor/>}/> 
      <Route path='/bathroom' element={<Bathroom/>}/> 
      <Route path='/designer' element={<Designer/>}/> 
      <Route path='/wishlist' element={<Wishlist/>}/> 
     </Routes>
     <Footer/>
     </WishlistProvider>
    </BrowserRouter>
     

    </>
  )
}

export default App
