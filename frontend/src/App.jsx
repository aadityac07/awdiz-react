
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Effect1 from './components/Effect1';
import Effect2 from './components/Effect2';
import Effect3 from './components/Effect3';
import Effect4 from './components/Effect4';
import Product from './components/Product';
import Params from './components/Params';
import Mapping from './components/Mapping';
import DynamicStyle from './components/DynamicStyle';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import AddProduct from './components/AddProduct';
import Practice from './components/Practice';
import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';
import UseReducer from './components/UseReducer';
import CustomHook from './components/CustomHook';
import CustomHookLS from './components/CustomHooksLS';
import YourProducts from './components/YourProducts';
import UpdateProduct from './components/UpdateProduct';
import Navbar from './components/common/Navbar';
import InvoiceCalculator from'./components/Invoicecalculator';
import InvoiceTable from './components/InvoiceTable';
import InvoiceForm from './components/InvoiceForm';
// import InvoiceItem from './components/InvoiceItem';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='*' element = {<NotFound/>}/>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/Profile' element = {<Profile />}/>
        <Route path='/Counter'element ={<Counter />}/>
        <Route path='/Effect1'element={<Effect1/>}/>
        <Route path='/Effect2'element={<Effect2/>}/>
        <Route path='/Effect3'element={<Effect3/>}/>
        <Route path='/Effect4'element={<Effect4/>}/>
        <Route path='/Params'element={<Params/>}/>
        <Route path='/Product/:id'element={<Product/>}/>
        <Route path='/Mapping' element={<Mapping names = {['yash','tejas','shreyas']}/>}/>
        <Route exact path='DynamicStyle' element={<DynamicStyle/>}/>
        <Route exact path='register' element={<Register/>}/>  
        <Route exact path= 'products' element={<Products/>}/>
        <Route exact path='/singleProduct/:id' element={<SingleProduct/>}/>
        <Route exact path='/addProduct' element={<AddProduct/>}/>
        <Route exact path='/practice' element={<Practice/>}/>
        <Route exact path='/use-memo'  element={<UseMemo/>}/>
        <Route exact path='/use-callback' element={<UseCallback/>}/>
        <Route exact path='/use-reducer' element={<UseReducer/>}/>
        <Route exact path='/customhook' element = {<CustomHook/>}/>
        <Route exact path='/customhook-ls' element = {<CustomHookLS/>}/>
        <Route exact path='/your-products' element = {<YourProducts/>}/>
        <Route exact path='/update-product/:id' element = {<UpdateProduct/>}/>
        <Route exact path='/InvoiceCalculator' element = {<InvoiceCalculator/>}/>
        <Route exact path='/InvoiceTable' element = {<InvoiceTable/>}/>
        <Route exact path='/InvoiceForm' element = {<InvoiceForm/>}/>
        {/* <Route exact path='/InvoiceItem' element = {<InvoiceItem/>}/> */}
      </Routes>
      {/* <h1>hello there</h1> */}
    </div>
  );
}

export default App;
