
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import About from './pages/about/about'
import Article from './pages/article/article'
import EditArticle from './pages/editArticle/editArticle'
import AddArticle from './pages/addArticle/addArticle'
import Articles from './pages/articles/articles'
import Courses from './pages/courses/courses'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/article/:articleId' element={<Article/>}/>
       <Route path='/edit/:articleId' element={<EditArticle/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/addArticle' element={<AddArticle/>}/>
        <Route path='/articles' element={<Articles/>}/>
    </Routes>
    </>
  )
}


export default App




  // <Routes>
     
  //       {/* <Route path="/addArticle" element={<AddArticle/>} /> */}
  //       {/* <Route path="/about" element={<About/>} />
  //       <Route path="/article/:articleId" element={<Article/>} />
  //       <Route path="/editArticle/:articleId" element={<EditArticle/>} /> */}
  //     </Routes>
