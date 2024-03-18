import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from'./componentes/Footer'
import Header from './componentes/Header'
import Main from './componentes/Main'
import './global.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </React.StrictMode>
)
