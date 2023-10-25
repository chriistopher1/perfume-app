import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Content from "./pages/content/content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/content" element={<Content />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
