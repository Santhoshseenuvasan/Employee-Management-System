import { Employee } from './Components/Employee';
import { FooterComponent } from './Components/FooterComponent';
import { HeaderComponent } from './Components/HeaderComponent';
import ListEmployee from './Components/ListEmployee';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return(
  <>
  <BrowserRouter>
  <HeaderComponent/>
  <Routes>
    <Route path='/' element={<ListEmployee/>}></Route>
    <Route path='/employees' element={<ListEmployee/>}></Route>
    <Route path='/add-employee' element={<Employee/>}></Route>
    <Route path='/edit-employee/:id' element={<Employee/>}></Route>
  </Routes>
  <FooterComponent/>
  </BrowserRouter>
  
  </>)
}
export default App;
