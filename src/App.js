import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import Commitment from "./pages/Commitment";
import NoPage from "./pages/NoPage";
import "./scss/App.scss"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="taahhut" element={<Commitment />} />
          <Route path="hizmetlerimiz" element={<Products />} />
          <Route path="iletisim" element={<Contact />} />
          <Route path="bize-ulasin" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

