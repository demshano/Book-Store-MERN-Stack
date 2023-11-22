import { Routes, Route } from 'react-router-dom';
import { CreateBooks, DeleteBook, EditBook, ShowBook, Home } from './pages';
import './App.css'

function App() {


  return (
  <main>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books/create' element={<CreateBooks />}/>
      <Route path='/book/details/:id' element={<ShowBook />}/>
      <Route path='/book/edit/:id' element={<EditBook />}/>
      <Route path='/book/delete/:id' element={<DeleteBook />}/>
    </Routes>
  </main>
  )
}

export default App
