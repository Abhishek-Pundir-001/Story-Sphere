import './App.css'
import CreateIllus from './Pages/CraeteIllus/CreateIllus';
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
import ReadMore from './Pages/ReadMore/ReadMore';
import MyStories from './Pages/MyStories/MyStories';
import UpdateStory from './Pages/Update/Update';

function App() {


  return (
   <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/createillus' element={<CreateIllus />}/>
      <Route path='/readmore' element={<ReadMore />} />
      <Route path='/mystories' element={<MyStories />} />
      <Route path='/update' element={<UpdateStory />} />

   </Routes>
     
  )
}

export default App
