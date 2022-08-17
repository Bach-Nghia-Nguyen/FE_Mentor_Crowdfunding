import Analytics from 'components/Analytics'
import Detail from 'components/Detail'
import Head from 'components/Head'
import Header from 'components/Header'
import React from 'react'
import './App.scss'

function App() {
  return (
    <div className="AppContainer">
      <Head />
      <div className="mainContainer">
        <Header />
        <Analytics />
        <Detail />
      </div>
    </div>
  )
}

export default App
