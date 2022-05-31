import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> {/* Switch~case 같은 역할 */}
				{/* HOME */}
        <Route path="/" element={<App />} />

				{/* USERS */}
        <Route path="/login" element={<div>로그인 컴포넌트</div>} />
        <Route path="/signup" element={<div>회원가입 컴포넌트</div>} />
				
				{/* HTTP ERROR PAGE */}
        <Route path="/404" element={<div>404</div>} />
				
        {/* Asterisk는 보통 Wildcard 역할 */}
        <Route path="/*" element={<Navigate replace to="404" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)