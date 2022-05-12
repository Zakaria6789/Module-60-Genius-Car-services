import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Resister from './Pages/Login/Resister/Resister';
import RequireAuth from './RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageService/ManageService';
import Orders from './Pages/Orders/Orders';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceID' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resister' element={<Resister></Resister>}></Route>
        <Route path='/checkout/:serviceID' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='/manageservice' element={
          <RequireAuth>
            <ManageService></ManageService>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
