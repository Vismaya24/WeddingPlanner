import {Routes,Route} from 'react-router-dom'
import HomePage from "./Component/HomePage";
import Photography from "./Component/photography";
import NavBar from "./Component/NavBar";
import Venue from './Component/venue';
import Makeover from './Component/makeover';
import Catering from './Component/catering';
import Gallery from './Component/gallery';
import { BrowseGallery } from '@mui/icons-material';
import AboutUs from './Component/AboutUs';

function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
       
        <Route path="/photography" element={ <Photography/> } />
        

        <Route path="/venue" element={ <Venue/> } />
        <Route path="/catering" element={ <Catering/> } />
       
        
        <Route path="/makeover" element={ <Makeover/> } />
       
        <Route path="/gallery" element={ <Gallery/> } />
        <Route path="/AboutUs" element={ <AboutUs/> } />
      </Routes>
    </div>
  )
}
export default App
