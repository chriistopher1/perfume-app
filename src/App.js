import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Content from "./pages/content/content";
import VerifyEmail from "./pages/verification/verify-email";
import RemoveCookie from "./pages/verification/remove-cookie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/content" element={<Content />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>
        <Route path="/remove-cookie" element={<RemoveCookie />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
