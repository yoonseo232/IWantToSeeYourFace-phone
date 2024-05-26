import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Phone from './components/Phone'
import PhoneHome from './components/PhoneHome'
import PhoneNumber from './components/PhoneNumber'
import PhoneMessage from './components/PhoneMessage.js'
import PhoneMessage_page1 from './components/PhoneMessage_page1'



  export default function App() {
  
  return (
    <div className="App">
     
    <BrowserRouter>
          <Routes>
              <Route path={"/phone"} element={<Phone />}></Route>
              <Route path={"/phoneHome"} element={<PhoneHome />}></Route>
              <Route path={"/phoneNumber"} element={<PhoneNumber />}></Route>
              <Route path={"/phoneMessage"} element={<PhoneMessage />}></Route>
              <Route path={"/phoneMessage_page1"} element={<PhoneMessage_page1 />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}