import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/Sign-In"

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}

export default App