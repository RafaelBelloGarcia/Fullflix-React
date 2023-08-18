import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import Detail from "../detail/Detail";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<p>Erro 404</p>} />
      </Routes>
    </BrowserRouter>
  );
}
