import { Route, Routes } from "react-router-dom";

// ??  pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/404";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";

//?? components
import Header from "./components/Header";
import Pagedetails from "./pages/Pagedetails";

function App() {
  
  return (
    <div className="container">
    <div className="app">
      <Header Login=""/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Pagedetails/>}/>
        <Route path="/products/add" element={<AddProduct/>}/>
       <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    </div>
  );
}
export default App
