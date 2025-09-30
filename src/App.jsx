import { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/styles/main.scss'

import { Home } from './views/Home'
import { store } from './store/store'
import { AtmoAction } from './views/AtmoAction'
import { Consultation } from './views/Consultation'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <main >
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<AtmoAction />} path="/action" />
            <Route element={<Consultation />} path="/consultation" />
          </Routes>
        </main>
      </Router >
    </Provider>
  )
}

export default App

