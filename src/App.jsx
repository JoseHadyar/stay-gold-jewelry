import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





const App = () =>{
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:idCategory' element={<ItemListContainer />}/> 
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;